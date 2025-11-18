import Image from "next/image";
import Trending from "@/src/components/organisms/Trending";
import TopNav from "@/src/components/organisms/TopNav";
import Footer from "@/src/components/organisms/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <TopNav />
       <Trending />
       <Footer />
      </main>
    </div>
  );
}
