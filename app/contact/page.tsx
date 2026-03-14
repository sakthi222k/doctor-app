"use client";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import { useState, useEffect,useRef } from "react";
import Image from "next/image";
import styles from "@/app/contact/contact.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Footer from "@/app/Components/Footer/Footer"

const options = [
  "Cardiology department",
  "Dermatology department",
  "Neurology department",
];

export default function ContactPage() {
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
     const boxRef = useRef<HTMLDivElement | null>(null);

    
      // Close dropdown when clicking outside
      useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          if (
            boxRef.current &&
            e.target instanceof Node &&
            !boxRef.current.contains(e.target)
          ) {
            setOpen(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);
      }, []);

    
      // Filter options based on input
      const filteredOptions = options.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
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
            <span className={styles.aboutTitle}>Contact</span>
            <span className={styles.aboutSubTitle}> Us</span>
            <p className={styles.aboutParagraph}>
              We’re always available to assist with your healthcare needs.
            </p>
          </div>
        </div>
        <div className={styles.ContactOverAllContainer}>
          <div className={styles.ImageWrapper}>
            <Image
              className={styles.contactImage}
              src="/Images/contactAppointmentImage.jpg"
              alt="about"
              fill
            />
          </div>
          <div>
            <div className={styles.appointment}>
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
                      placeholder="Your email"
                      className={styles.appointmentInput}
                    />
                  </div>
                  <div className={styles.appointmentContainerItems}>
                    <label htmlFor="" className={styles.appointmentLabel}>
                      Phone
                    </label>{" "}
                    <input
                      placeholder="Your phone"
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
                      placeholder="Your department"
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
                </div>
                <div className={styles.appointmentContainerItems1}>
                  <label htmlFor="" className={styles.appointmentLabel}>
                    Your Message
                  </label>{" "}
                  <textarea
                    placeholder="Write your messages..."
                    className={styles.appointmentInput1}
                  />
                </div>
                <button className={styles.appointmentBtn}>
                  Make An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ContactDetails}>
          <div className={styles.ContactDetailsContainer}>
            <FiPhoneCall className={styles.ContactIcon} />
            <div className={styles.contactTextContainer}>
              <p className={styles.contactPara1}>Call Us</p>
              <p className={styles.contactPara2}>+00 (47) 939 4888</p>
            </div>
          </div>
          <div className={styles.ContactDetailsContainer}>
            <AiOutlineMail className={styles.ContactIcon} />
            <div className={styles.contactTextContainer}>
              <p className={styles.contactPara1}>Send Email</p>
              <p className={styles.contactPara2}>yordomain@gmial.com</p>
            </div>
          </div>
          <div className={styles.ContactDetailsContainer}>
            <SlLocationPin className={styles.ContactIcon} />
            <div className={styles.contactTextContainer}>
              <p className={styles.contactPara1}>Location</p>
              <p className={styles.contactPara2}>2702 Memory Lane</p>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189839.91663048722!2d-88.02774703149692!3d41.97346989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fca241d09c435%3A0xcede38a7e2d6cfe1!2sKK%20Hospital%20Care!5e0!3m2!1sen!2sin!4v1767968567318!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Click overlay */}
          <a
            href="https://maps.app.goo.gl/9eC2NQPPJKychWiH8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapOverlay}
            aria-label="Open location in Google Maps"
          />
              </div>
              <Footer />
      </motion.div>
    </div>
  );
}
