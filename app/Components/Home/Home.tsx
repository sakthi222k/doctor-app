"use client";

import Image from "next/image";
import styles from "@/app/Components/Home/home.module.css";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
// import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
// import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Scroll to top when page is refreshed or first loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.FullHeroSection}>
      <Image
        className={styles.shapeImage5}
        src="/Images/home-shape-1.png"
        alt="shapeImage1"
        width={110}
        height={70}
      />
      <Image
        className={styles.shapeImage6}
        src="/Images/hand1.png"
        alt="shapeImage1"
        width={100}
        height={100}
      />
      <div className={styles.HeroSection}>
        <div className={styles.contentSection}>
          <div className={styles.contentText}>
            <motion.h1
              className={styles.titleText}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              We Care About <br /> Your Body And Mind
            </motion.h1>
            <motion.h1
              className={styles.titleText1}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              We Care About Your Body And Mind
            </motion.h1>
            <motion.p
              className={styles.ParaText}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              The All On Four conceipt means that the bridge that compensates
              all teeth of one jaw leans on only 4 Implants.
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            >
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Button className={styles.appointmentBtn}>
                  <IoIosArrowForward className={styles.arrowIcon} />
                  More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className={styles.paperContainer}>
            <div className={styles.paperText}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "140px",
                }}
              >
                <Image
                  src="/Images/feature-2.png"
                  alt="icon"
                  width={36}
                  height={44}
                />
                <Link href="/login">
                  <IoIosArrowForward className={styles.ArrowForwardIcon} />
                </Link>
              </motion.div>
              <motion.p
                style={{ fontSize: "20px", color: "#28241f" }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Book An Appointment
              </motion.p>
            </div>

            <div className={styles.paperText}>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "140px",
                }}
              >
                <Image
                  src="/Images/feature-2.png"
                  alt="icon"
                  width={36}
                  height={44}
                />
                <Link href="/dashboard/patient">
                  <IoIosArrowForward className={styles.ArrowForwardIcon} />
                </Link>
              </motion.div>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ fontSize: "20px", color: "#28241f" }}
              >
                Appointment Details
              </motion.p>
            </div>

            <div style={{ gap: "25px" }} className={styles.paperText}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Image
                  src="/Images/feature-3.png"
                  alt="icon"
                  width={50}
                  height={50}
                />
                <div>
                  <span style={{ fontSize: "20px", color: "#4b5563" }}>
                    Call Us Anytime
                  </span>{" "}
                  <br />
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    +38 002 0209 00
                  </span>
                </div>
              </motion.div>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ fontSize: "20px", color: "#28241f" }}
              >
                Have an Any Emergency?
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          className={styles.ImageSection}
          initial={{ y: 100, opacity: 2 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            className={styles.doctorImage}
            src="/Images/hero-img.png"
            alt="Doctor"
            width={755}
            height={791}
          />
          <Image
            className={styles.doctorImage1}
            src="/Images/hero-img.png"
            alt="Doctor"
            width={470}
            height={492}
          />
        </motion.div>

        <div style={{ zIndex: "3", backgroundColor: "#f1efefff" }}>
          <div className={styles.paperContainer2}>
            <div className={styles.paperText}>
              <div className={styles.paperTextContent}>
                <Image
                  src="/Images/feature-2.png"
                  alt="icon"
                  width={36}
                  height={44}
                />
                <IoIosArrowForward className={styles.ArrowForwardIcon} />
              </div>
              <p style={{ fontSize: "20px", color: "#28241f" }}>
                Book An Appointment
              </p>
            </div>

            <div className={styles.paperText}>
              <div className={styles.paperTextContent}>
                <Image
                  src="/Images/feature-2.png"
                  alt="icon"
                  width={36}
                  height={44}
                />
                <IoIosArrowForward className={styles.ArrowForwardIcon} />
              </div>
              <p style={{ fontSize: "20px", color: "#28241f" }}>
                Book An Appointment
              </p>
            </div>

            <div style={{ gap: "44px" }} className={styles.paperText}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Image
                  src="/Images/feature-3.png"
                  alt="icon"
                  width={50}
                  height={50}
                />
                <div>
                  <span style={{ fontSize: "20px", color: "#4b5563" }}>
                    Call Us Anytime
                  </span>{" "}
                  <br />
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    +38 002 0209 00
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "20px", color: "#28241f" }}>
                Have an Any Emergency?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
