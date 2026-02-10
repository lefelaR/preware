"use client";

import React from "react";
import Image from "next/image";

interface Props {
	item: {
		id: number;
		title?: string;
		name?: string;
		poster_path?: string | null;
		backdrop_path?: string | null;
		vote_average?: number;
		release_date?: string;
		first_air_date?: string;
	};
}

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export default function Card({ item }: Props) {
	const title = item.title ?? item.name ?? "Untitled";
	const imagePath = item.poster_path || item.backdrop_path;
	const src = imagePath ? `${TMDB_IMAGE_BASE}/w342${imagePath}` : null;
	const year = (item.release_date ?? item.first_air_date)?.slice(0, 4) ?? "";
	const vote = typeof item.vote_average === "number" ? item.vote_average.toFixed(1) : null;

	return (
		<article className="group bg-surface rounded-lg overflow-hidden shadow-md">
			<div className="relative h-48 w-full bg-surface-elevated">
				{src ? (
					<Image
						src={src}
						alt={title}
						fill
						className="object-cover transition-transform duration-200 group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, 33vw"
						unoptimized
					/>
				) : (
					<div className="h-full w-full bg-surface-elevated" />
				)}
			</div>
			<div className="p-3">
				<h3 className="text-sm font-semibold text-foreground truncate">{title}</h3>
				<div className="mt-1 flex items-center justify-between text-xs text-muted">
					<span>{year}</span>
					{vote && <span className="bg-background/60 px-2 py-0.5 rounded text-[11px] font-medium">{vote}</span>}
				</div>
			</div>
		</article>
	);
}

