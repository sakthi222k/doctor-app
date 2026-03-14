"use client";

import { useEffect, useState } from "react";
import styles from "@/app/dashboard/patient/patient.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import Footer from "@/app/Components/Footer/Footer";

export default function PatientDashboard() {
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
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5001/api/appointments/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Appointments:", data);

        if (Array.isArray(data)) {
          setAppointments(data);
        }
      });
  }, []);

  const uniqueDoctors = Array.from(
    new Map(
      appointments.map((appt) => [appt.doctorId?._id, appt.doctorId]),
    ).values(),
  ).filter((doc) => doc != null);

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
        <div className={styles.dashboardContainer}>
          {/* SIDEBAR */}
          <aside className={styles.sideBar}>
            <div className={styles.logoSection}>
              <div className={styles.logoBox}>P</div>
              <span style={{ fontWeight: 600, fontSize: "18px" }}>
                Patient Dashbord
              </span>
            </div>

            {/* <nav className={styles.navbarMenu}>
          <div className={styles.navbarMenuActive}>Dashboard</div>
          <div className={styles.navItem}>Schedule</div>
          <div className={styles.navItem}>Message</div>
          <div className={styles.navItem}>Activity</div>
          <div className={styles.navItem}>Setting</div>
        </nav> */}
          </aside>

          {/* MAIN CONTENT */}
          <main className={styles.mainContent}>
            <header className={styles.headerFlex}>
              <div>
                <h2>Good Morning</h2>
                <p>There are {appointments.length} appointments scheduled</p>
              </div>
            </header>

            {/* DOCTORS SECTION */}
            <section>
              <div className={styles.sectionTitle}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  Doctor Details
                </h3>
              </div>

              <div className={styles.doctorList}>
                {uniqueDoctors.length === 0 ? (
                  <p
                    style={{
                      textAlign: "center",
                      color: "#a0aec0",
                      padding: "2rem",
                    }}
                  >
                    No appointments found
                  </p>
                ) : (
                  uniqueDoctors.map((doc: any) => (
                    <div key={doc._id} className={styles.doctorCard}>
                      <div className={styles.doctorInfoGroup}>
                        <div className={styles.doctorImgWrapper}>
                          <img
                            src={`http://localhost:5001${doc.profileImage}`}
                            style={{width:"100px", height:"100px"}}
                            alt="Doctor"
                          />
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: "1.1rem" }}>
                            Dr. {doc.userId?.name}{" "}
                            <span className={styles.statusDot}></span>
                          </h4>
                          <p
                            style={{
                              color: "#a0aec0",
                              fontSize: "0.85rem",
                              margin: "4px 0",
                            }}
                          >
                            {doc.specialization ||
                              "General Physician"}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginTop: "8px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.75rem",
                                background: "#f8f9fd",
                                padding: "4px 8px",
                                borderRadius: "6px",
                              }}
                            >
                              💼 10 Years
                            </span>
                            <span
                              style={{
                                fontSize: "0.75rem",
                                background: "#f8f9fd",
                                padding: "4px 8px",
                                borderRadius: "6px",
                              }}
                            >
                              ⭐ 4.9+
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className={styles.consultBtn}>Consult Now</button>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* SCHEDULE SECTION */}
            <section>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Schedule
              </h3>
              <div className={styles.scheduleGrid}>
                {appointments.slice(0, 2).map((appt) => (
                  <div key={`s-${appt._id}`} className={styles.scheduleCard}>
                    <div className={styles.scheduleHeader}>
                      <div className={styles.iconBox}>📅</div>
                      <div>
                        <p
                          style={{
                            fontSize: "0.7rem",
                            color: "#a0aec0",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            margin: 0,
                          }}
                        >
                          {appt.doctorId?.specialization || "General Physician"}
                        </p>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          Dr. {appt.doctorId?.userId?.name}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid #f1f5f9",
                        paddingTop: "12px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#a0aec0",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {new Date(appt.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#2563eb",
                          fontWeight: 800,
                          marginTop: "4px",
                        }}
                      >
                        {appt.time} AM
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
