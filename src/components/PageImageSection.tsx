import { FadeIn } from "@/components/FadeIn";
import {
  PAGE_IMAGE_ASSETS,
  type PageImagePreset,
} from "@/lib/pageImageSections";

type PageImageSectionProps = {
  preset: PageImagePreset;
  /** Override image URL (defaults from PAGE_IMAGE_ASSETS) */
  src?: string;
  className?: string;
};

export function PageImageSection({
  preset,
  src,
  className = "",
}: PageImageSectionProps) {
  const cfg = PAGE_IMAGE_ASSETS[preset];
  const imageSrc = src ?? cfg.placeholderSrc;

  return (
    <FadeIn className={className}>
      <figure className="mx-auto min-w-0 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-black/20 shadow-[0_20px_50px_-15px_rgba(6,61,66,0.45)] ring-1 ring-black/5">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9] md:aspect-[16/7]">
            <img
              src={imageSrc}
              alt={cfg.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={preset === "home" ? "eager" : "lazy"}
              decoding="async"
              {...(preset === "home" ? { fetchPriority: "high" } : {})}
            />
          </div>
        </div>
        <figcaption className="mt-3 max-w-3xl text-center text-xs leading-relaxed text-[#5c574d] sm:text-left sm:text-sm">
          {cfg.caption}
        </figcaption>
      </figure>
    </FadeIn>
  );
}
