"use client";

import { useEffect, useState } from "react";
import styles from "@/app/dashboard/doctor/doctor.module.css";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import Footer from "@/app/Components/Footer/Footer";


export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [earnings, setEarnings] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      try {
        const apptRes = await fetch(
          "http://localhost:5001/api/appointments/doctor",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

       const apptData = await apptRes.json();
       console.log("Appointments response:", apptData);
       

       if (Array.isArray(apptData)) {
         setAppointments(apptData);
       } else {
         console.log("Appointments API error:", apptData);
         setAppointments([]);
       }

        const earnRes = await fetch(
          "http://localhost:5001/api/appointments/earnings",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        console.log("Earnings response:", earnRes)

        const earnData = await earnRes.json();
        setEarnings(earnData);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <Header />
      <MyNavbar />

      <div className={styles.dashboardContainer}>
        {/* SIDEBAR */}
        <aside className={styles.sideBar}>
          <div className={styles.logoSection}>
            <div className={styles.logoBox}>D</div>
            <span style={{ fontWeight: 800 }}>Doctor Panel</span>
          </div>
          <nav className={styles.navMenu}>
            <div className={styles.navItemActive}>Overview</div>
            {/* <div className={styles.navItem}>My Schedule</div>
            <div className={styles.navItem}>Patients</div>
            <div className={styles.navItem}>Earning History</div> */}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className={styles.mainContent}>
          <header className={styles.headerFlex}>
            <h2 >Doctor Dashboard</h2>
            <p style={{ color: "#a0aec0" }}>
              Manage your daily appointments and track earnings.
            </p>
          </header>

          {/* EARNINGS & STATS CARDS */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.earningsIcon}`}>
                ₹
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#64748b",
                    fontWeight: 600,
                  }}
                >
                  Total Revenue
                </p>
                <h3 style={{ margin: 0, color: "#1a202c" }}>
                  ₹{earnings?.totalEarnings || 0}
                </h3>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.apptIcon}`}>📅</div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "#64748b",
                    fontWeight: 600,
                  }}
                >
                  Total Bookings
                </p>
                <h3 style={{ margin: 0, color: "#1a202c" }}>
                  {earnings?.totalAppointments || 0}
                </h3>
              </div>
            </div>
          </div>

          {/* FULL APPOINTMENTS LIST */}
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ margin: 0,color: "#002345" }}>Upcoming Appointments</h3>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#10b981",
                  fontWeight: 700,
                }}
              >
                {appointments.length} Total
              </span>
            </div>

            <div className={styles.patientList}>
              {appointments.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem",
                    background: "#fff",
                    borderRadius: "20px",
                  }}
                >
                  <p style={{ color: "#a0aec0" }}>
                    No appointments scheduled yet.
                  </p>
                </div>
              ) : (
                appointments.map((appt) => (
                  <div key={appt._id} className={styles.patientCard}>
                    <div className={styles.patientInfo}>
                      <div className={styles.avatarCircle}>
                        {appt.patientId?.name?.charAt(0) || "P"}
                      </div>
                      <div>
                        <h4 style={{ margin: 0, color: "#1a202c" }}>
                          {appt.patientId?.name || "Unknown Patient"}
                        </h4>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.8rem",
                            color: "#a0aec0",
                          }}
                        >
                          {appt.patientId?.email}
                        </p>
                      </div>
                    </div>

                    <div style={{ flex: 1, paddingLeft: "2rem" }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "#4a5568",
                        }}
                      >
                        📅{" "}
                        {new Date(appt.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "#3b82f6",
                          fontWeight: 700,
                        }}
                      >
                        ⏰ {appt.time}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                      }}
                    >
                      <span
                        className={`${styles.statusBadge} ${appt.status === "confirmed" ? styles.confirmed : styles.pending}`}
                      >
                        {appt.status}
                      </span>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          style={{
                            background: "#10b981",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "10px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "0.8rem",
                          }}
                        >
                          Accept
                        </button>
                        <button
                          style={{
                            background: "#fee2e2",
                            color: "#ef4444",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "10px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: "0.8rem",
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
