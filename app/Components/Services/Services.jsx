"use client";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/app/Components/Services/services.module.css";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { duration } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const [activeService, setActiveService] = useState("womenshealth");
  const servicesData = {
    womenshealth: {
      title: "Women's Health",
      mainline: "Compassionate Womens's HealthCare",
      description:
        "Our experts provide compassionate care for every phase of a women's life.",
      image: "/Images/service-01.jpg",
    },
    eyecare: {
      title: "Eye Care Services",
      mainline: "Comprehensive Vision Care for Brighter Living",
      description:
        "From checkups to surgeries, we protect your vision with precision.",
      image: "/Images/Eyecare-Services-5.png",
    },
    cardiology: {
      title: "Cardiology Services",
      mainline: "Advanced Heart Care You Can Trust",
      description:
        "We offer expert diagnosis and treatment for all heart conditions.",
      image: "/Images/cardio1.png",
    },
    dental: {
      title: "Dental Care",
      mainline: "Healthy Smiles Start Here",
      description:
        "Our dentists provide gentle, modern dental treatments for all ages.",
      image: "/Images/dental-service.jpg",
    },
  };
  const selected = servicesData[activeService];

  return (
    <div className={styles.services}>
      <Image
        className={styles.shapeImage1}
        src="/Images/shape-1.png"
        alt="shapeImage1"
        width={199}
        height={177}
      />
      <Image
        className={styles.shapeImage2}
        src="/Images/shape-2.png"
        alt="shapeImage2"
        width={226}
        height={159}
      />
      <div className={styles.serviceTitle}>
        <p
          style={{
            margin: "auto",
            fontSize: "14px",
            backgroundColor: "#02c9b81c",
            color: "#02c9b8",
            padding: "12px 20px 10px 20px",
            width: "fit-content",
            fontWeight: "600",
            letterSpacing: "3px",
            borderRadius: "4px",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          OUR SERVICES
        </p>
        <h1 className={styles.serviceText}>
          Leading the Way in Healthcare Excellence and Innovation.
        </h1>
      </div>
      <div className={styles.serviceContent}>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.serviceContentText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              className={`${styles.appointmentBtn1} ${
                activeService === "womenshealth" ? styles.activebtn : ""
              }`}
              onClick={() => setActiveService("womenshealth")}
            >
              Women's Health
              <IoIosArrowForward
                className={`${styles.arrowIcon1} ${
                  activeService === "womenshealth" ? styles.iconActivebtn : ""
                }`}
              />
            </Button>
            <Button
              className={`${styles.appointmentBtn1} ${
                activeService === "eyecare" ? styles.activebtn : ""
              }`}
              onClick={() => setActiveService("eyecare")}
            >
              Eye Care Services
              <IoIosArrowForward
                className={`${styles.arrowIcon1} ${
                  activeService === "eyecare" ? styles.iconActivebtn : ""
                }`}
              />
            </Button>
            <Button
              className={`${styles.appointmentBtn1} ${
                activeService === "cardiology" ? styles.activebtn : ""
              }`}
              onClick={() => setActiveService("cardiology")}
            >
              Cardiology Services
              <IoIosArrowForward
                className={`${styles.arrowIcon1} ${
                  activeService === "cardiology" ? styles.iconActivebtn : ""
                }`}
              />
            </Button>
            <Button
              className={`${styles.appointmentBtn1} ${
                activeService === "dental" ? styles.activebtn : ""
              }`}
              onClick={() => setActiveService("dental")}
            >
              Dental Care
              <IoIosArrowForward
                className={`${styles.arrowIcon1} ${
                  activeService === "dental" ? styles.iconActivebtn : ""
                }`}
              />
            </Button>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.serviceContentImage}
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.serviceContentImage1}>
              <FaHeartbeat className={styles.heartIcon} />
              <h1 className={styles.serviceh1}>{selected.mainline}</h1>
              <p className={styles.servicepara}>{selected.description}</p>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <Button className={styles.appointmentBtn}>
                  <IoIosArrowForward className={styles.arrowIcon} />
                  More Details
                </Button>
              </Link>
            </div>
            <div>
              <p className={styles.serviceTitleText}>{selected.title}</p>
              <Image
                className={styles.serviceImage}
                src={selected.image}
                alt="serviceImage"
                width={417}
                height={439}
              />
              <Image
                className={styles.serviceImage1}
                src={selected.image}
                alt="serviceImage"
                width={432}
                height={455}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <Image
          className={styles.shapeImage3}
          src="/Images/shape-3.png"
          alt="shapeImage1"
          width={318}
          height={145}
        />
      </div>
    </div>
  );
}
