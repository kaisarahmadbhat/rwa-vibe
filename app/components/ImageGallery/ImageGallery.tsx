"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./ImageGallery.module.scss";

interface GalleryImage {
  src: string;
  alt: string;
}

const column1: GalleryImage[] = [
  { src: "/images/gallery-1.jpg", alt: "Watercolor portrait art" },
  { src: "/images/gallery-4.jpg", alt: "Abstract black and white art" },
  { src: "/images/gallery-7.jpg", alt: "Pink microscopic art" },
];

const column2: GalleryImage[] = [
  { src: "/images/gallery-2.jpg", alt: "Surreal collage portrait" },
  { src: "/images/gallery-5.jpg", alt: "Crystal fingers art" },
  { src: "/images/gallery-8.jpg", alt: "Surreal golden sphere" },
];

const column3: GalleryImage[] = [
  { src: "/images/gallery-3.jpg", alt: "Colorful abstract painting" },
  { src: "/images/gallery-6.jpg", alt: "Girl in yellow dress painting" },
  { src: "/images/gallery-9.jpg", alt: "Purple marble abstract" },
];

const GAP = 12;

function InfiniteColumn({
  images,
  direction,
  duration = 30,
}: {
  images: GalleryImage[];
  direction: "up" | "down";
  duration?: number;
}) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [setHeight, setSetHeight] = useState(0);

  useEffect(() => {
    function measure() {
      if (measureRef.current) {
        const children = measureRef.current.children;
        let total = 0;
        const count = images.length;
        for (let i = 0; i < count; i++) {
          total += (children[i] as HTMLElement).getBoundingClientRect().height;
        }
        total += (count) * GAP;
        setSetHeight(total);
      }
    }

    measure();

    // Re-measure after images load
    const imgs = measureRef.current?.querySelectorAll("img");
    imgs?.forEach((img) => {
      img.addEventListener("load", measure);
    });

    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      imgs?.forEach((img) => {
        img.removeEventListener("load", measure);
      });
    };
  }, [images.length]);

  // Duplicate images 4 times for seamless loop
  const duplicated = [...images, ...images, ...images, ...images];

  const yStart = direction === "up" ? 0 : -setHeight;
  const yEnd = direction === "up" ? -setHeight : 0;

  return (
    <div className={styles.columnTrack}>
      <motion.div
        ref={measureRef}
        className={styles.columnInner}
        animate={setHeight > 0 ? { y: [yStart, yEnd] } : undefined}
        transition={{
          y: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        style={{ gap: `${GAP}px` }}
      >
        {duplicated.map((image, i) => (
          <div className={styles.imageWrapper} key={`${image.src}-${i}`}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ImageGallery() {
  const [currentPage] = useState(4);
  const totalPages = 208;

  return (
    <div className={styles.gallery}>
      <div className={styles.masonryGrid}>
        <InfiniteColumn images={column1} direction="up" duration={25} />
        <InfiniteColumn images={column2} direction="down" duration={28} />
        <InfiniteColumn images={column3} direction="up" duration={26} />
      </div>

      <div className={styles.pagination}>
        <button className={styles.paginationBtn} aria-label="Previous page">
          <ChevronLeft size={16} />
        </button>
        <span className={styles.paginationInfo}>
          {currentPage} / {totalPages}
        </span>
        <button className={styles.paginationBtn} aria-label="Next page">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
