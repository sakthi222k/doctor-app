"use client";
import styles from "@/app/review/review.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import MyNavbar from "../Components/MyNavbar/MyNavbar";
import Image from "next/image";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";

const reviewsData = [
  {
    name: "Arjun Kumar",
    role: "Product Manager",
    image: "/Images/Testimonial-1.png",
    text: "Our experience with this hospital was excellent. The doctors were professional, the staff was caring, and the facilities were clean and well-maintained.",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "/Images/Testimonial-2.png",
    text: "The hospital provides quality care and well-organized services. From appointment booking to the consultation, everything was smooth and efficient.",
  },
  {
    name: "James Thompson",
    role: "UX Specialist",
    image: "/Images/Testimonial-5.png",
    text: "The hospital services are patient-focused and well-organized. The clean, informative website makes it easy to find doctors and book appointments.",
  },
  // {
  //   name: "Anjali Verma",
  //   role: "Project Coordinator",
  //   image: "/Images/Testimonial-3.png",
  //   text: "The hospital services are patient-focused and well-organized. The clean, informative website makes it easy to find doctors and book appointments.",
  // },
];
export default function ReviewPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // // Pre-remove any HTML preloader (optional)
    const pre = document.getElementById("initial-preloader");
    if (pre) pre.remove();

    // simulate data load
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // go to top
  }, []);
  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div
            key={loading ? "loading" : "content"}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1, transition: { duration: 0.1 } }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              zIndex: 9999,
            }}
          >
            {/* Lottie animation */}
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              className="lottieAnime"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <MyNavbar />
        <div>
          <Image
            className={styles.aboutImage}
            src="/Images/aboutBackground.png"
            alt="about"
            width={1530}
            height={600}
          />
          <Image
            className={styles.aboutImage1}
            src="/Images/MobileScreenImage.png"
            alt="about"
            width={500}
            height={650}
          />
          <div className={styles.aboutContent}>
            <span className={styles.aboutTitle}>Revi</span>
            <span className={styles.aboutSubTitle}>ews</span>
            <p className={styles.aboutParagraph}>
              Trusted by Patients, Proven by Experience
            </p>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.header}>
            <p className={styles.subTitle}>References</p>
            <h1 className={styles.title}>What Our Clients Say</h1>
          </div>

          <div className={styles.grid}>
            {reviewsData.map((review, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.reviewText}>{review.text}</p>

                <div className={styles.profile}>
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className={styles.avatar}
                  />
                  <div>
                    <h6 className={styles.name}>{review.name}</h6>
                    <p className={styles.titleRole}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Review />
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
