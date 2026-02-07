import React from 'react';
import Link from 'next/link';

const SideNav = () => {
  return (
    <nav className="flex flex-col gap-1 p-5">
      <h1 className="text-xs font-semibold uppercase tracking-wider text-muted px-3 mb-2">
        <Link href="/" className="block px-3 py-2 rounded-md text-foreground/90 hover:bg-surface-elevated hover:text-accent transition-colors">
          Preware
        </Link>
      </h1>
      <ul className="flex flex-col gap-0.5">
        <li>
          <Link href="/movies" className="block px-3 py-2 rounded-md text-foreground/90 hover:bg-surface-elevated hover:text-accent transition-colors">
            Movies
          </Link>
        </li>
        <li>
          <Link href="/series" className="block px-3 py-2 rounded-md text-foreground/90 hover:bg-surface-elevated hover:text-accent transition-colors">
            Series
          </Link>
        </li>
        <li>
          <Link href="/top-imdb" className="block px-3 py-2 rounded-md text-foreground/90 hover:bg-surface-elevated hover:text-accent transition-colors">
            Top IMDb
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
