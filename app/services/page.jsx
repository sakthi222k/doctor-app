"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import Image from "next/image";
import styles from "@/app/services/services.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Paper } from "@mui/material";
import Footer from "@/app/Components/Footer/Footer";

const options = [
  "Cardiology department",
  "Dermatology department",
  "Neurology department",
];
export default function PageService() {
  const targetRef = useRef(null);
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const boxRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options based on input
  const filteredOptions = options.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  const handleScroll = () => {
    if (!targetRef.current) return;

    const isMobile = window.innerWidth <= 600;

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "start" : "center",
    });
  }; 
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
            <span className={styles.aboutTitle}>Servi</span>
            <span className={styles.aboutSubTitle}>ces</span>
            <p className={styles.aboutParagraph}>
              Quality healthcare services for a healthier tomorrow
            </p>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesTitlecontainer}>
            <h1 className={styles.servicesTitle}>Our Medical Services</h1>
            <p className={styles.servicesSubtitle}>
              From essential care to advanced treatments, we combine expert
              service with the latest medical innovations.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/5.jpg"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>
                  General Consultation
                </h4>
                <p className={styles.serviceCardDescription}>
                  We deliver personalized medical care through accurate
                  diagnosis and customized treatment plans for overall
                  well-being.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW
                  <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/4.jpg"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>
                  Smart Diagnosis & Testing
                </h4>
                <p className={styles.serviceCardDescription}>
                  Advanced diagnostic tools and technology-driven tests for
                  accurate, fast, and reliable medical evaluations.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/6.jpg"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>24/7 Emergency Care</h4>
                <p className={styles.serviceCardDescription}>
                  Round-the-clock emergency support to handle urgent medical
                  situations with speed, care, and expertise.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/7.jpg"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>
                  Specialist Medical Care
                </h4>
                <p className={styles.serviceCardDescription}>
                  Access to experienced specialists providing focused, expert
                  treatment across multiple medical disciplines.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/8.png"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>
                  Preventive Healthcare
                </h4>
                <p className={styles.serviceCardDescription}>
                  Proactive health checkups and preventive care programs to
                  identify issues early and support long-term overall health.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.serviceCard}
              whileHover={{ y: -15 }}
              transition={{ type: "keyframes" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.serviceImage1}
                  src="/Images/1.jpg"
                  alt="shapeImage1"
                  fill
                />
              </div>
              <div className={styles.serviceCardContent}>
                <h4 className={styles.serviceCardTitle}>
                  Digital Appointment & Records
                </h4>
                <p className={styles.serviceCardDescription}>
                  Seamless online appointment booking and secure digital health
                  records to ensure a smooth healthcare experience.
                </p>
                <button className={styles.bookButton} onClick={handleScroll}>
                  BOOK NOW <FaLongArrowAltRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={styles.appointment} ref={targetRef}>
          <div className={styles.appontmentContainerOverAll}>
            <h1 className={styles.BookTitle}>Book An Appointment</h1>
            <div className={styles.appointmentContainer}>
              <div className={styles.appointmentContainerItems}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Name
                </label>{" "}
                <input
                  placeholder="Your Name"
                  className={styles.appointmentInput}
                />
              </div>
              <div className={styles.appointmentContainerItems}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Email
                </label>{" "}
                <input
                  placeholder="Your Email"
                  className={styles.appointmentInput}
                />
              </div>
              <div className={styles.appointmentContainerItems}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Phone
                </label>{" "}
                <input
                  placeholder="Your Phone"
                  className={styles.appointmentInput}
                />
              </div>
              <div className={styles.selectBox} ref={boxRef}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Department
                </label>{" "}
                <input
                  type="text"
                  value={value}
                  onClick={() => setOpen(true)}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Your Department"
                  className={styles.appointmentInput}
                />
                {open && (
                  <ul className={styles.dropdown}>
                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((item) => (
                        <li
                          key={item}
                          onClick={() => {
                            setValue(item);
                            setOpen(false);
                          }}
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className={styles.noData}>No results found</li>
                    )}
                  </ul>
                )}
              </div>
              <div className={styles.appointmentContainerItems}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Date
                </label>{" "}
                <input
                  placeholder="Your Date"
                  className={styles.appointmentInput}
                />
              </div>
              <div className={styles.appointmentContainerItems}>
                <label htmlFor="" className={styles.appointmentLabel}>
                  Time
                </label>{" "}
                <input
                  placeholder="Your Time"
                  className={styles.appointmentInput}
                />
              </div>
            </div>
            <button className={styles.appointmentBtn}>
              Make An Appointment
            </button>
          </div>
          <div className={styles.appointmentImage}>
            <Image
              className={styles.appointmentImage1}
              src="/Images/appointment.jpg"
              alt="appointment"
              width={453.33}
              height={490}
            />
            <Image
              className={styles.appointmentImage2}
              src="/Images/appointment.jpg"
              alt="appointment"
              width={470}
              height={490}
            />
          </div>
        </div>
        <div className={styles.layer}></div>
        <Footer />
      </motion.div>
    </div>
  );
}
