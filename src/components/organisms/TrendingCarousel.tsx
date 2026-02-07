'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MovieServices from '@/src/services/MovieServices';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';
const SLIDE_INTERVAL_MS = 3000;
const SLIDE_COUNT = 5;

interface TrendingItem {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  poster_path: string | null;
}

export default function TrendingCarousel() {
  const [items, setItems] = useState<TrendingItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    debugger
    console.log(process.env.URL_ENDPOINT);
    console.log(process.env.ACCESS_TOKEN);
    console.log(process.env.API_KEY);
    MovieServices.getTrendingMovies()
      .then((res: { results?: TrendingItem[] }) => {
        debugger
        const list = res?.results ?? [];
        setItems(list.slice(0, SLIDE_COUNT));
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  if (loading) {
    return (
      <section className="relative h-[100vh] w-full bg-surface-elevated flex items-center justify-center">
        <span className="text-muted">Loading…</span>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="relative h-[100vh] w-full bg-surface-elevated flex items-center justify-center">
        <span className="text-muted">No trending titles</span>
      </section>
    );
  }

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {items.map((item, index) => {
        const imagePath = item.backdrop_path || item.poster_path;
        const src = imagePath
          ? `${TMDB_IMAGE_BASE}/w1280${imagePath}`
          : null;
        const title = item.title ?? item.name ?? '';

        return (
          <div
            key={`${item.id}-${index}`}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{
              opacity: index === current ? 1 : 0,
              zIndex: index === current ? 1 : 0,
            }}
            aria-hidden={index !== current}
          >
            {src ? (
              <Image
                src={src}
                alt={title || 'Trending'}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-surface-elevated" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground drop-shadow-lg">
                {title}
              </h2>
            </div>
          </div>
        );
      })}
      {items.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className="h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                width: index === current ? 24 : 8,
                backgroundColor: index === current ? 'var(--accent)' : 'var(--muted)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
