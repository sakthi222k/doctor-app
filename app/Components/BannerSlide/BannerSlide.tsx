"use client";

import styles from "@/app/Components/BannerSlide/BannerSlide.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const banners = [
  "/Banners/Banner_5.png",
  "/Banners/Banner_2.png",
  "/Banners/Banner_3.png",
  "/Banners/Banner_4.png",
  "/Banners/Banner_1.png",
];

const Mobilebanners = [
  "/Banners/BannerMobile5.png",
  "/Banners/BannerMobile2.png",
  "/Banners/BannerMobile3.png",
  "/Banners/BannerMobile4.png",
  "/Banners/BannerMobile1.png",
]

const slidesMobile = [...Mobilebanners, ...Mobilebanners];

const MOBILE_SLIDE_WIDTH = 350;
const MOBILE_SLIDE_HEIGHT = 450;
const MOBILE_IMAGE_COUNT = Mobilebanners.length;

const slides = [...banners, ...banners];

const SLIDE_WIDTH = 1214;
const SLIDE_HEIGHT = 350;
const IMAGE_COUNT = banners.length;

export default function BannerSlide() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === IMAGE_COUNT) {
      setTimeout(() => {
        setAnimate(false);
        setCurrent(0);
      }, 1200);
    } else {
      setAnimate(true);
    }
  }, [current]);
  return (
    <div>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.slider}
          animate={{ x: -current * SLIDE_WIDTH }}
          transition={
            animate ? { duration: 0.8, ease: "easeInOut" } : { duration: 0 }
          }
        >
          {slides.map((img, i) => (
            <div className={styles.slide} key={i}>
              {" "}
              <Image
                src={img}
                alt="banner"
                fill
                className={styles.image}
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

        <div className={styles.dots}>
          {banners.map((_, index) => (
            <span
              key={index}
              className={styles.dot}
              style={{
                background:
                  current % IMAGE_COUNT === index ? "#2563eb" : "#cbd5e1",
              }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.wrapper1}>
        <motion.div
          className={styles.slider}
          animate={{ x: -current * MOBILE_SLIDE_WIDTH }}
          transition={
            animate ? { duration: 0.8, ease: "easeInOut" } : { duration: 0 }
          }
        >
          {slidesMobile.map((img, i) => (
            <div className={styles.slide1} key={i}>
              {" "}
              <Image
                src={img}
                alt="banner"
                fill
                className={styles.image}
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

        <div className={styles.dots}>
          {Mobilebanners.map((_, index) => (
            <span
              key={index}
              className={styles.dot}
              style={{
                background:
                  current % MOBILE_IMAGE_COUNT === index ? "#2563eb" : "#cbd5e1",
              }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
