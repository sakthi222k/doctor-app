"use client";
// import { Paper } from "@mui/material";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import styles from "@/app/Components/About/about.module.css";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function About({style}) {
  return (
    // <motion.div
    //   className="fullAboutSection"
    //   initial={{ opacity: 0, y: 150 }}
    //   whileInView={{ opacity: 2, y: 0 }}
    //   transition={{ duration: 1.5 }}
    //   viewport={{ once: true }}
    //   style={{ height: "100vh" }}
    // >
    // </motion.div>
    <div className={styles.aboutSection}>
      <Image
        className={styles.shapeImage3}
        style={style}
        src="/Images/about-shape-2.png"
        alt="shapeImage1"
        width={259}
        height={166}
      />
      <div className={styles.aboutSectionInner}>
        <div className={styles.aboutImages}>
          <div className={styles.card}>
            <Image
              src="/Images/about-01.jpg"
              alt="about1"
              width={515}
              height={341}
              style={{
                zIndex: "1",
              }}
            />
          </div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: easeIn,
            }}
            className={styles.card}
          >
            <div className={styles.card}>
              <Image
                src="/Images/about-02.jpg"
                alt="about1"
                width={275}
                height={314}
                style={{
                  zIndex: "2",
                  margin: "100px 0px 0px 360px",
                  border: "white solid 10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ x: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: easeIn,
            }}
            className={styles.card}
          >
            <div className={styles.card}>
              <Image
                src="/Images/about-03.jpg"
                alt="about1"
                width={463}
                height={376}
                style={{
                  zIndex: "3",
                  margin: "280px 0px 0px 80px",
                  border: "white solid 10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles.aboutImages1}>
          <div className={styles.card}>
            <Image
              src="/Images/about-01.jpg"
              alt="about1"
              width={470}
              height={311}
              style={{
                zIndex: "1",
                padding: "10px 15px 10px 15px",
              }}
            />
          </div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: easeIn,
            }}
            className={styles.card}
          >
            <div className={styles.card}>
              <Image
                src="/Images/about-02.jpg"
                alt="about1"
                width={180}
                height={204}
                style={{
                  zIndex: "2",
                  margin: "0px 0px 0px 297px",
                  border: "white solid 10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ x: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: easeIn,
            }}
            className={styles.card}
          >
            <div className={styles.card}>
              <Image
                src="/Images/about-03.jpg"
                alt="about1"
                width={140}
                height={116}
                style={{
                  zIndex: "3",
                  margin: "185px 0px 0px 20px",
                  border: "white solid 10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles.aboutTextContainer}>
          <p
            style={{
              fontSize: "14px",
              backgroundColor: "rgb(2 201 184 / 11%)",
              color: "#02c9b8",
              padding: "10px 20px 10px 20px",
              borderRadius: "1px",
              width: "fit-content",
              fontWeight: "600",
              letterSpacing: "3px",
            }}
          >
            ABOUT US
          </p>
          <h1
            className={styles.aboutTitle}
          >
            Heart & Science of Medical Test for Your Treatment
          </h1>
          <p className={styles.aboutParaText}>
            Your brand deserves more that just attention-it deserves results.
            That's why we offer end-to-end creative services that help you
            engage your audience, build trust, and grow with confidence.
          </p>
          <div className={styles.aboutIconText}>
            <div className={styles.aboutIconText1}>
              <Image
                src={"/Images/icon-01.png"}
                alt="icon01"
                width={66}
                height={66}
              />
              <p className={styles.aboutIconText3}>
                Medical And Expertise Services
              </p>
            </div>
            <div className={styles.aboutIconText2}>
              <Image
                src={"/Images/icon-02.png"}
                alt="icon01"
                width={66}
                height={66}
              />
              <p className={styles.aboutIconText3}>
                Medicine and Our instrument
              </p>
            </div>
          </div>
          <div className={styles.aboutTickParaContainer1}>
            <div className={styles.aboutTickParaText1}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Comprehensive Inpatient Service</p>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Specialised Support Service</p>
            </div>
            <div className={styles.aboutTickParaText2}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Management Consultation</p>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Instant Operation & Appointment</p>
            </div>
          </div>
          <div className={styles.aboutTickParaContainer2}>
            <div className={styles.aboutTickParaText}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Comprehensive Inpatient Service</p>
            </div>
            <div className={styles.aboutTickParaText}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Specialised Support Service</p>
            </div>

            <div className={styles.aboutTickParaText}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Management Consultation</p>
            </div>
            <div className={styles.aboutTickParaText}>
              <FontAwesomeIcon icon={faCheck} className={styles.tickIcon} />
              <p className={styles.tickText}>Instant Operation & Appointment</p>
            </div>
          </div>
          <Link href="/about" style={{ textDecoration: "none" }}>
          <Button className={styles.appointmentBtn}>
            <IoIosArrowForward className={styles.arrowIcon} />
            More About Us
          </Button>   
          </Link>
        </div>
        <Image
          className={styles.shapeImage4}
          src="/Images/about-shape-03.png"
          alt="shapeImage1"
          width={119}
          height={76}
        />
      </div>
    </div>
  );
}
