import { FadeIn } from "@/components/FadeIn";
import {
  PAGE_IMAGE_ASSETS,
  type PageImagePreset,
} from "@/lib/pageImageSections";

type PageImageSectionProps = {
  preset: PageImagePreset;
  /** Override placeholder when `public/images/pages/...` file is ready */
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
        {/*
          Replace image: add file at cfg.recommendedClientPath (see pageImageSections.ts),
          then pass src="/images/pages/your-file.jpg" or update PAGE_IMAGE_ASSETS placeholderSrc.
        */}
        <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-black/20 shadow-[0_20px_50px_-15px_rgba(6,61,66,0.45)] ring-1 ring-black/5">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9] md:aspect-[16/7]">
            {/* Use native img so SVG placeholders and future JPG/WebP both work reliably */}
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
          <strong className="font-semibold text-[#063d42]">Placeholder — </strong>
          {cfg.caption}{" "}
          <span className="block pt-1 opacity-90 sm:inline sm:pt-0">
            Suggested final file:{" "}
            <code className="whitespace-normal break-all rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-[#2a2720] sm:text-xs">
              {cfg.recommendedClientPath}
            </code>
          </span>
        </figcaption>
      </figure>
    </FadeIn>
  );
}
