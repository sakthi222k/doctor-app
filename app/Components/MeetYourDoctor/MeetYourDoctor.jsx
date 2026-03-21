"use client";
import styles from "@/app/Components/MeetYourDoctor/meet.module.css";
import Image from "next/image";
import { BsHeartPulse } from "react-icons/bs";
import { PiStethoscope } from "react-icons/pi";
import { CiHospital1 } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const options = [
  "Cardiology department",
  "Dermatology department",
  "Neurology department",
  "Others",
];
export default function MeetYourDoctor() {
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
    item.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <>
      <div className={styles.doctor}>
        <Image
          className={styles.shape1}
          src="/Images/shape-02.png"
          alt="shapeImage1"
          width={59}
          height={64}
        />
        <Image
          className={styles.shape2}
          src="/Images/shape-001.png"
          alt="shapeImage2"
          width={119}
          height={76}
        />
        <div className={styles.doctorContainer}>
          <div className={styles.titleSection}>
            <p className={styles.meetWithDoctorText}>MEET WITH DOCTOR</p>
            <h1 className={styles.titleText}>
              We Are Specialize in Medical <br />
              Care For Yor Treatment
            </h1>
          </div>
          <div className={styles.contentSection}>
            <div className={styles.contentHeader}>
              <div className={styles.innerContentHeader}>
                <h5 className={styles.ContentHeaderText1}>
                  Comprehensive Care for Every Need
                </h5>
                <BsHeartPulse className={styles.ContentHeaderIcon1} />
              </div>
              <p className={styles.contentHeaderPara}>
                We provide comprehensive, reliable medical care to support the
                health of your entire family always.
              </p>
            </div>
            <div className={styles.contentHeader}>
              <div className={styles.innerContentHeader}>
                <h5 className={styles.ContentHeaderText2}>
                  Trusted Care for Every Life
                </h5>
                <PiStethoscope className={styles.ContentHeaderIcon2} />
              </div>
              <p className={styles.contentHeaderPara}>
                Our clinic delivers consistent, dependable treatment with
                compassion, empathy, and dedicated care.
              </p>
            </div>
            <div className={styles.contentHeader}>
              <div className={styles.innerContentHeader}>
                <h5 className={styles.ContentHeaderText3}>
                  Health Solutions You Can Trust
                </h5>
                <CiHospital1 className={styles.ContentHeaderIcon3} />
              </div>
              <p className={styles.contentHeaderPara}>
                We use modern technology and expert medical care to support your
                long-term health and recovery needs.
              </p>
            </div>
          </div>
        </div>
      </div>
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
          <Link href="/login">
            <button className={styles.appointmentBtn}>
              Make An Appointment
            </button>
          </Link>
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
    </>
  );
}
