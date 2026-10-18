import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Journal.module.css";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, culture, and styling from Karnataka Silk Industries Corporation.",
};

const SECTIONS = [
  { label: "Stories", href: "/heritage" },
  { label: "Culture", href: "/heritage#timeline" },
  { label: "Styling", href: "/collection" },
];

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.subnav} aria-label="Journal sections">
        <div className={styles.subnavInner}>
          {SECTIONS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <section className={styles.intro} aria-label="Journal">
        <p className={styles.eyebrow}>Journal</p>
        <h1>Notes from the house of Mysore Silk.</h1>
        <p className={styles.lead}>
          Read the story of the weave, the culture that keeps it, and how the silk is worn.
        </p>
      </section>
    </div>
  );
}
