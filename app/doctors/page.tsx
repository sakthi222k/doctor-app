"use client";

import { useEffect, useState } from "react";
import styles from "@/app/doctors/doctors.module.css";
import { useRouter } from "next/navigation";
import Header from "../Components/Header/Header";
import MyNavbar from "../Components/MyNavbar/MyNavbar";
import { API_BASE_URL } from "@/app/lib/api.js";

export default function DoctorsPage(){
  const router = useRouter();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/doctors`)
          .then((res) => res.json())
          .then((data) => setDoctors(data));
    },[]);

    return (
      <>
      <Header />
      <MyNavbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Find a Doctor</h1>

        <div className={styles.grid}>
          {doctors.map((doc: any) => (
            <div key={doc._id} className={styles.card}>
              <img
                src={`${API_BASE_URL}${doc.profileImage}`}
                alt="doctor"
                className={styles.image}
              />

              <h3>{doc.name}</h3>
              <p className={styles.specialization}>{doc.specialization}</p>
              <p>Experience: {doc.experience} Years</p>
              <p className={styles.fee}>₹{doc.consultationFee}</p>

              <button
                className={styles.btn}
                onClick={() =>
                  router.push(`/appointmentPayment/${doc._id}`)
                }
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
      </>
    );
}