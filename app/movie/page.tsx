export default function MoviePage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
            Movie
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted">
            Explore movie details and related content here. (Content coming soon.)
          </p>
        </header>
      </main>
    </div>
  );
}

