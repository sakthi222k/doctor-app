"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "@/app/appointmentPayment/[id]/appointmentPayment.module.css";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import Footer from "@/app/Components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import { API_BASE_URL } from "@/app/lib/api.js";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function AppointmentPage() {
  const { id } = useParams();
  const doctorId = id as string;

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

  const [doctor, setDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [sumbitloading, setSubmitLoading] = useState(false);

  // Load Razorpay
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Fetch Doctor
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/doctors/${doctorId}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [doctorId]);

  // Fetch Slots
  useEffect(() => {
    fetch(
      `${API_BASE_URL}/api/availability?doctorId=${doctorId}&date=2026-03-12`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("SLOTS RESPONSE:", data);

        if (data?.slots) {
          const formattedSlots = data.slots.map((slot: any, index: number) => ({
            _id: index,
            time: slot.time,
            isBooked: slot.isBooked,
            date: data.date,
          }));
          setSlots(formattedSlots);
        } else {
          setSlots([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setSlots([]);
      });
  }, [doctorId]);

  const handlePayment = async () => {
    if (!selectedSlot) {
      alert("Please select a slot");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login First");
      return;
    }

    try {
      setSubmitLoading(true);

      const res = await fetch(
        `${API_BASE_URL}/api/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ doctorId }),
        },
      );

      const data = await res.json();

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: doctor?.userId?.name,
        description: "Doctor Consultation Fee",
        theme: { color: "#2563eb" },

        handler: async function (response: any) {
          const verifyRes = await fetch(
            `${API_BASE_URL}/api/payment/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                doctorId,
                date: selectedSlot.date,
                time: selectedSlot.time,
                amount: doctor.consultationFee,
              }),
            },
          );

          const data = await verifyRes.json();

          if (data.success) {
            alert("Appointment Confirmed 🎉");
          } else {
            alert("Payment verification failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Payment Failed");
    } finally {
      setSubmitLoading(false);
    }
  };

  if (!doctor) {
    return <div className="loading">Loading Doctor...</div>;
  }

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
        <div className={styles.appointmentContainer}>
          <div className={styles.appointmentCard}>
            {/* LEFT: DOCTOR PROFILE */}
            <div className={styles.doctorProfileSection}>
              <img
                src={`${API_BASE_URL}${doctor.profileImage}`}
                alt="Doctor"
                className={styles.doctorImage}
              />
              <span className={styles.specializationTag}>
                {doctor.specialization}
              </span>
              <h2>{doctor.userId?.name}</h2>

              <div className={styles.doctorStats}>
                <div className={styles.statItem}>
                  <p>Experience</p>
                  <h4>{doctor.experience}Yrs+</h4>
                </div>
                <div className={styles.statItem}>
                  <p>Rating</p>
                  <h4>4.9+⭐</h4>
                </div>
              </div>
            </div>

            {/* RIGHT: SLOT BOOKING */}
            <div className={styles.bookingSection}>
              <h3 className={styles.sectionTitle}>Select Time Slot</h3>

              <div className={styles.slotGrid}>
                {slots.length > 0 ? (
                  slots.map((slot) => (
                    <button
                      key={slot._id}
                      disabled={slot.isBooked}
                      className={`${styles.slotBtn} ${selectedSlot?._id === slot._id ? styles.selected : ""}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>
                        Morning
                      </span>
                      {slot.time}
                    </button>
                  ))
                ) : (
                  <p style={{ color: "#94a3b8" }}>
                    No slots available for this date.
                  </p>
                )}
              </div>

              {/* PAYMENT FOOTER */}
              <div className={styles.paymentFooter}>
                <div>
                  <p className={styles.priceLabel}>Total Amount</p>
                  <h2 className={styles.priceAmount}>
                    ₹{doctor.consultationFee}
                  </h2>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={sumbitloading || !selectedSlot}
                  className={styles.payButton}
                >
                  {sumbitloading ? "Processing..." : "Confirm Booking"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </motion.div>
    </div>
  );
}
