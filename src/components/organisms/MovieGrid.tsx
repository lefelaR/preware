"use client";

import React, { useEffect, useState } from "react";
import MovieServices from "@/src/services/MovieServices";
import Card from "./Card";

export default function MovieGrid() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MovieServices.getMovies("en-US")
      .then((data) => {
        const typed = data as { results?: any[] };
        setItems(typed?.results ?? []);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-6 text-center text-muted">Loading…</div>;
  if (items.length === 0) return <div className="py-6 text-center text-muted">No movies</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {items.slice(0, 24).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
