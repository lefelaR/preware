import TrendingCarousel from "@/src/components/organisms/TrendingCarousel";
import MovieSection from "./movie/section";
import SeriesSection from "./series/section";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background">
      <TrendingCarousel />
      
      <MovieSection />
      <SeriesSection />
    </main>
  );
}
