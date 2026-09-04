import { useEffect, useRef, useState } from "react";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  /** Number of automatic reload attempts if the image fails to load. */
  retries?: number;
};

/**
 * Image that does everything it can to actually appear:
 * - never lazy-defers itself out of existence (eager + high fetch priority)
 * - decodes async so it paints as soon as bytes land
 * - retries a failed load a few times with a cache-busting query
 * - falls back to a neutral branded placeholder instead of a broken icon
 */
export function SmartImage({ src, alt, retries = 3, className = "", ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  const attempts = useRef(0);

  useEffect(() => {
    attempts.current = 0;
    setFailed(false);
    setCurrent(src);
  }, [src]);

  const onError = () => {
    if (attempts.current < retries) {
      attempts.current += 1;
      const sep = src.includes("?") ? "&" : "?";
      setCurrent(`${src}${sep}r=${attempts.current}`);
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-secondary/60 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground ${className}`}
      >
        Kamyorg
      </div>
    );
  }

  return (
    <img
      {...rest}
      src={current}
      alt={alt}
      loading="eager"
      decoding="async"
      // @ts-expect-error fetchpriority is a valid HTML attribute
      fetchpriority="high"
      onError={onError}
      className={className}
    />
  );
}
