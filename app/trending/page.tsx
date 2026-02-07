import TrendingCarousel from '@/src/components/organisms/TrendingCarousel';

export default function TrendingPage() {
  return (
    <div className="min-h-screen">
      <TrendingCarousel />
      <div className="py-8 px-8">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">Trending</h1>
        <p className="mt-2 text-muted">Trending content goes here.</p>
      </div>
    </div>
  );
}
