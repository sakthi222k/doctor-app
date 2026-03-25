"use client";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/about/about.module.css";
import About from "@/app/Components/About/About";
import { IoMedkitOutline } from "react-icons/io5";
import { BsHouseHeart } from "react-icons/bs";
import Footer from "@/app/Components/Footer/Footer";

export default function AboutPage() {
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
              className={styles.lottieAnime}
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
            <span className={styles.aboutTitle}>About</span>
            <span className={styles.aboutSubTitle}> Us</span>
            <p className={styles.aboutParagraph}>
              Your health is our priority, every step of the way
            </p>
            <span className={styles.line}></span>
          </div>
        </div>
        {/* <Image
          className={styles.shape1}
          src="/Images/shape-02.png"
          alt="shapeImage1"
          width={59}
          height={64}
        /> */}
        {/* <Image
          className={styles.shapeImage6}
          src="/Images/hand1.png"
          alt="shapeImage1"
          width={100}
          height={100}
        /> */}{" "}
        <div className={styles.aboutComponent}>
          <Image
            className={styles.shapeImage3}
            src="/Images/about-shape-2.png"
            alt="shapeImage1"
            width={259}
            height={166}
          />
          <About style={{ display: "none" }} />
        </div>
        <div className={styles.aboutDoctorContainer}>
          <div className={styles.aboutDoctorContent}>
            <div>
              <h1 className={styles.welcomeText}>
                Welcome to CureZone Medical Center for Care
              </h1>
              <p className={styles.aboutDoctorText}>
                We assess your current health condition and plan your treatment.
                Our specialists will care for your wellbeing with dedication.
              </p>
            </div>
            <div className={styles.aboutDoctorContentBoxes}>
              <div className={styles.aboutDoctorContentBox}>
                <IoMedkitOutline
                  className={styles.aboutDoctorContentBoxIcon1}
                />
                <div className={styles.aboutDoctorContentBoxText}>
                  <h1 className={styles.aboutDoctorContentBoxTextTitle}>
                    Why We Stand Out?
                  </h1>
                  <p className={styles.aboutDoctorContentBoxTextParagraph}>
                    CureZone puts patients first, delivering high-quality
                    healthcare. We use smart medical technology to ensure a
                    seamless care experience.
                  </p>
                </div>
              </div>
              <div className={styles.aboutDoctorContentBox}>
                <BsHouseHeart className={styles.aboutDoctorContentBoxIcon2} />
                <div className={styles.aboutDoctorContentBoxText}>
                  <h1 className={styles.aboutDoctorContentBoxTextTitle}>
                    Get the Right Care, Every Time
                  </h1>
                  <p className={styles.aboutDoctorContentBoxTextParagraph}>
                    Relieve pain, stress, and health concerns with our 24/7
                    medical services. We focus on timely diagnosis, effective
                    treatment, and compassionate care with minimal discomfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutDoctorImageContainer}>
            <Image
              className={styles.aboutDoctorImage}
              src="/Images/aboutDoctorImage.png"
              alt="about"
              width={500}
              height={550}
            />
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
