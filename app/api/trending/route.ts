import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language') ?? 'en-US';
  debugger

  const accessToken = process.env.TMDB_ACCESS_TOKEN;
  const apiKey = process.env.TMDB_API_KEY;

  if (!accessToken && !apiKey) {
    return NextResponse.json(
      { error: 'Missing TMDB credentials. Set TMDB_ACCESS_TOKEN or TMDB_API_KEY.' },
      { status: 500 }
    );
  }

  const url = new URL('https://api.themoviedb.org/3/trending/all/day');
  url.searchParams.set('language', language);
  if (apiKey) {
    // TMDB v3 key support
    url.searchParams.set('api_key', apiKey);
  }

  const res = await fetch(url, {
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      Accept: 'application/json',
    },
    // Keep it simple; you can tune caching later
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json(
      { error: 'TMDB request failed', status: res.status, details: text },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}

