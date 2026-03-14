"use client"
import styles from "@/app/Components/Header/header.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <div style={{ alignItems: "center" }}>
          <p>
            CureZone – The most optimal consulting solution{" "}
            <Link href="/contact" style={{color:"white"}}> Contact Us.</Link>
          </p>
        </div>
      </div>

      <div className={styles.headerOverItems}>
        <div className={styles.headerItems}>
          <MdOutlineMailOutline style={{ fontSize: "26px" }} />
          <p style={{ fontSize: "18px" }}> curezonehealth@gmail.com</p>
        </div>
        <div className={styles.headerItems}>
          <MdAccessTime style={{ fontSize: "24px" }} />
          <p style={{ fontSize: "16px" }}>Mon - Fri: 09am - 07pm</p>
        </div>
        <div className={styles.headerItems}>
          <TbLocation style={{ fontSize: "23px",paddingTop:"2px"}} />
          <p style={{ fontSize: "16px" }}>Graaf Floriss 22A CH NY</p>
        </div>
      </div>
    </div>
  );
}
