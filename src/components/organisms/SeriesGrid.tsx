"use client";

import React, { useEffect, useState } from "react";
import MovieServices from "@/src/services/MovieServices";
import Card from "./Card";

export default function SeriesGrid() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MovieServices.getTrendingMovies("en-US")
      .then((data) => {
        const typed = data as { results?: any[] };
        // prefer tv items (media_type === 'tv') or items with first_air_date
        const results = (typed?.results ?? []).filter((r) => r.media_type === 'tv' || r.first_air_date);
        setItems(results);
      })
      .catch((err) => {
        console.error("Error fetching series:", err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-6 text-center text-muted">Loading…</div>;
  if (items.length === 0) return <div className="py-6 text-center text-muted">No series</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {items.slice(0, 24).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
