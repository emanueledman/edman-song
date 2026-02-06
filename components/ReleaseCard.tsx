import { Play, Heart, Download } from "lucide-react";
import Link from "next/link";
import { Track } from "@/lib/data";

interface ReleaseCardProps {
  release: Track;
}

export const ReleaseCard = ({ release }: ReleaseCardProps) => {
  const badgeClasses = {
    new: "gradient-primary",
    trending: "gradient-secondary",
    popular: "gradient-accent",
  };

  return (
    <div className="release-card min-w-[280px] max-w-[280px] group">
      {/* Image */}
      <Link href={`/track/${release.slug}`}
        className="h-52 w-full bg-cover bg-center relative block"
        style={{ backgroundImage: `url(${release.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="play-btn">
            <Play className="w-6 h-6 ml-1" />
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/track/${release.slug}`} className="hover:text-primary transition-colors">
            <h4 className="font-semibold text-lg truncate">{release.title}</h4>
          </Link>
          {release.badge && (
            <span
              className={`${badgeClasses[release.badge.type]} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white flex-shrink-0 ml-2`}
            >
              {release.badge.label}
            </span>
          )}
        </div>
        <Link href={`/artist/${release.artistSlug}`}
          className="text-muted-foreground text-sm mb-3 block hover:text-primary transition-colors"
        >
          {release.artistName}
        </Link>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Play className="w-3.5 h-3.5" /> {release.plays}
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5" /> {release.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" /> {release.downloads}
          </span>
        </div>
      </div>
    </div>
  );
};
