import {
  SiInstagram,
  SiThreads,
  SiX,
  SiTelegram,
  SiPinterest,
  SiTiktok,
  SiYoutube,
  SiWhatsapp,
} from "react-icons/si";
import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { SOCIALS } from "@/lib/site-data";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  instagram: SiInstagram,
  threads: SiThreads,
  x: SiX,
  telegram: SiTelegram,
  pinterest: SiPinterest,
  tiktok: SiTiktok,
  youtube: SiYoutube,
  whatsapp: SiWhatsapp,
  email: Mail,
};

type Props = {
  /** Visual size of the tap target */
  size?: "sm" | "md";
  className?: string;
};

export function SocialIcons({ size = "md", className = "" }: Props) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const glyph = size === "sm" ? "h-[0.95rem] w-[0.95rem]" : "h-[1.05rem] w-[1.05rem]";

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.id];
        const isMail = s.id === "email";
        return (
          <li key={s.id}>
            <a
              href={s.href}
              {...(isMail ? {} : { target: "_blank", rel: "noreferrer" })}
              aria-label={s.label}
              title={s.label}
              className={`inline-flex ${box} items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand focus-visible:border-brand focus-visible:text-brand focus-visible:outline-none`}
            >
              <Icon className={glyph} />
              <span className="sr-only">{s.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
