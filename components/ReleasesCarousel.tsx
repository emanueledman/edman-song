import Link from "next/link";
import { ReleaseCard } from "./ReleaseCard";
import { getFeaturedTracks } from "@/lib/data";

export const ReleasesCarousel = () => {
  const releases = getFeaturedTracks();

  return (
    <section className="py-16" id="explorar">
      <div className="flex justify-between items-end mb-10">
        <h2 className="section-title">
          Lançamentos em <span className="gradient-text">Destaque</span>
        </h2>
        <Link href="/releases"
          className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-4 transition-all"
        >
          Ver Todos
          <span className="w-8 h-0.5 bg-primary" />
        </Link>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-6 scrollbar-custom -mx-5 px-5">
        {releases.map((release) => (
          <ReleaseCard key={release.slug} release={release} />
        ))}
      </div>
    </section>
  );
};
