"use client";

import styles from "@/app/Components/Footer/footer.module.css";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: easeIn,
        }}
        className={styles.FooterShape1}
      >
        <Image
          className={styles.shapeImage1}
          src="/Images/top.png"
          alt="Logo"
          width={119}
          height={76}
        />
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: easeIn,
        }}
        className={styles.FooterShape1}
      >
        <Image
          className={styles.shapeImage2}
          src="/Images/right-shape.png"
          alt="Logo"
          width={109}
          height={109}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: easeIn,
        }}
        className={styles.FooterShape1}
      >
        <Image
          className={styles.shapeImage3}
          src="/Images/left-shape.png"
          alt="Logo"
          width={259}
          height={166}
        />
      </motion.div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.LogoImage}>
            <Image
              className={styles.LogoImage1}
              src="/Images/CureZone-blue1.png"
              alt="Logo"
              width={190}
              height={47}
            />
          </div>
          <h1 className={styles.footerContentTitle}>
            There Is Only One Thing In The World I Want And That Is Hospital.
          </h1>
          <div className={styles.footerSocialIcons}>
            <FaFacebookF className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
            <FaYoutube className={styles.socialIcon} />
            <RiLinkedinFill className={styles.socialIcon} />
          </div>
          <Image
            className={styles.scopeImage}
            src="/Images/footer-shape.png"
            alt="Logo"
            width={143}
            height={199}
          />
        </div>

        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinks}>
            <h4 className={styles.footerLinksTitle}>Quick Links</h4>
            <span className={styles.navbarLinks}>
              <Link href="/">Home</Link>
            </span>
            <span className={styles.navbarLinks}>
              <Link href="/about">About Us</Link>
            </span>
            <span className={styles.navbarLinks}>
              <Link href="/services">Services</Link>
            </span>
            <span className={styles.navbarLinks}>
              <Link href="/review">Reviews</Link>
            </span>
            <span className={styles.navbarLinks}>
              <Link href="/contact">Contact Us</Link>
            </span>
          </div>

          <div className={styles.footerServices}>
            <h4 className={styles.footerLinksTitle}>Our Services</h4>
            <span className={styles.navbarLinks}>
              <a href="">Ophthalmology</a>
            </span>
            <span className={styles.navbarLinks}>
              <a href="">Orthopdics</a>
            </span>
            <span className={styles.navbarLinks}>
              <a href="">Cosmetology</a>
            </span>
            <span className={styles.navbarLinks}>
              <a href="">Pathology</a>
            </span>
            <span className={styles.navbarLinks}>
              <a href="">Psychiatry</a>
            </span>
          </div>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerLinksTitle}>Contact Us</h4>
          <p className={styles.footerContactText}>
            At MediCenter we intend to create medicines that improve both the
            quality and duration of patient lives.
          </p>
          <div className={styles.footerContactInfo}>
            <MdEmail className={styles.socialIcon2} />{" "}
            <p className={styles.footerContactAddress}>yordomain@gmail.com</p>
          </div>
          <div className={styles.footerContactInfo}>
            <FaLocationDot className={styles.socialIcon3} />{" "}
            <p className={styles.footerContactAddress}>
              2702 Memory Lane Chicago, IL 60605 New York, USA
            </p>
          </div>
        </div>
        <div className={styles.footerWorkingContainer}>
          <div className={styles.footerWorking}>
            <Image
              className={styles.LogoImage3}
              src="/Images/CureZone.png"
              alt="Logo"
              width={225}
              height={68}
            />
            <p className={styles.footerWorkingText}>
              We dedicated to providing flexible & accessible healthcare
              services.
            </p>
            <div>
              <div className={styles.footerWorkingHours}>
                <p className={styles.footerWorkingHoursTime}>Monday - Friday</p>{" "}
                <p className={styles.footerWorkingHoursTime}>9AM - 10PM</p>
              </div>
              <div className={styles.footerWorkingHours}>
                <p className={styles.footerWorkingHoursTime}>Saturday</p>{" "}
                <p className={styles.footerWorkingHoursTime}>9AM - 8PM</p>
              </div>
              <div className={styles.footerWorkingHours}>
                <p className={styles.footerWorkingHoursTime}>Sunday</p>{" "}
                <p className={styles.footerWorkingHoursTime}>9AM - 12AM</p>
              </div>
            </div>
            <div className={styles.footerBooking}>
              <Image
                src="/Images/feature-3.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <span style={{ fontSize: "16px", color: "#4b5563" }}>
                  For Booking
                </span>{" "}
                <br />
                <span className={styles.footerContactNumber}>
                  (635) 5258-4250
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          Copyright © 2025 All Rights Reserved.
        </p>
      </div>
    </>
  );
}
