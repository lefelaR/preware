'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MovieServices from '@/src/services/MovieServices';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';
const SLIDE_INTERVAL_MS = 3000;


interface TrendingItem {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
}

export default function TrendingCarousel() {
  const [items, setItems] = useState<TrendingItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MovieServices.getTrendingMovies('en-US')
      .then((data) => {
        const typed = data as { results?: TrendingItem[] };
        setItems(typed?.results ?? []);
      })
      .catch((error) => {
        console.error('Error fetching trending movies:', error);
        setItems([]);
      })
      .finally(() => {
        setLoading(false);
      });
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
      <section className="relative mt-[3px] h-[75vh] w-full bg-surface-elevated flex items-center justify-center">
        <span className="text-muted">Loading…</span>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="relative mt-[3px] h-[75vh] w-full bg-surface-elevated flex items-center justify-center">
        <span className="text-muted">No trending titles</span>
      </section>
    );
  }

  return (
    <section className="relative mt-[3px] h-[75vh] w-full overflow-hidden">
      {/* Dark border-like gradient around the whole carousel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/95 via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background/80 to-transparent" />

      {items.map((item, index) => {
        const imagePath = item.backdrop_path || item.poster_path;
        const src = imagePath
          ? `${TMDB_IMAGE_BASE}/w1280${imagePath}`
          : null;
        const title = item.title ?? item.name ?? '';
        const overview = item.overview ?? '';
        const year =
          (item.release_date ?? item.first_air_date)?.slice(0, 4) ?? '';
        const vote =
          typeof item.vote_average === 'number'
            ? item.vote_average.toFixed(1)
            : null;
        const mediaType = item.media_type
          ? item.media_type.charAt(0).toUpperCase() + item.media_type.slice(1)
          : '';

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
            {/* Vertical fade from bottom to top */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            {/* Horizontal fades on left and right edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-1/3 px-8 md:px-16 z-10 space-y-3">
              <h2 className="text-5xl md:text-6xl font-extrabold text-foreground drop-shadow-lg">
                {title}
              </h2>
              {(vote || year || mediaType) && (
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-light text-foreground/70 drop-shadow-md">
                  {vote && (
                    <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-background/40">
                      {/* ring background */}
                      <div className="absolute inset-0 rounded-full bg-background/60" />
                      {/* ring progress using conic gradient */}
                      <div
                        className="absolute inset-[2px] rounded-full"
                        style={{
                          background: `conic-gradient(var(--accent) ${(Number(vote) / 10) * 100}%, rgba(255,255,255,0.08) 0)`,
                          WebkitMask:
                            'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                          mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                        }}
                      />
                      {/* center label */}
                      <span className="relative text-[10px] font-semibold text-foreground">
                        {vote}
                      </span>
                    </div>
                  )}
                  {year && (
                    <span className="flex items-center gap-2">
                      <span className="h-px w-5 bg-foreground/40" />
                      <span>{year}</span>
                    </span>
                  )}
                  {mediaType && (
                    <span className="flex items-center gap-2">
                      <span className="h-px w-5 bg-foreground/40" />
                      <span className="uppercase tracking-wide">
                        {mediaType}
                      </span>
                    </span>
                  )}
                </div>
              )}
              {overview && (
                <p className="max-w-3xl text-sm md:text-base font-light text-foreground/80 drop-shadow-md overflow-hidden text-ellipsis line-clamp-3">
                  {overview}
                </p>
              )}
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
