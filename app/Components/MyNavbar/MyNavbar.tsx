// components/MyNavbar.tsx
"use client";
import React, { useState, useEffect } from "react";
// import { Paper } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import SideNavbar from "../SideNavbar/SideNavbar";
import Image from "next/image";
// import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaHeadsetSolid } from "react-icons/lia";
import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/app/Components/MyNavbar/mynavbar.module.css";
import { motion } from "framer-motion";
// import { faL } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function MyNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleSideNavbar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSideNavbar = () => {
    setSidebarOpen(false);
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div>
        <SideNavbar isOpen={sidebarOpen} onClose={closeSideNavbar} />

        <div className={styles.NavbarItems}>
          <Image
            className={styles.LogoImage}
            src="/Images/CureZone.png"
            alt="Logo"
            width={200}
            height={60}
          />
          <span className={styles.navbarLinks}>
            <Link href="/">Home</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/about">About</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/services">Services</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/shop">Shop</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/review">Reviews</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/contact">Contact Us</Link>
          </span>
          <Link href="/cart">
            <ShoppingCartIcon style={{ fontSize: "22px" }} />
            {totalItems > 0 && (
              <CartBadge
                badgeContent={totalItems}
                color="primary"
                overlap="circular"
              />
            )}
          </Link>
          <div className={styles.EmgNo}>
            <LiaHeadsetSolid
              style={{ fontSize: "50px", color: "rgba(156, 205, 240, 1)" }}
            />
            <div style={{ display: "grid", gap: "5px" }}>
              <span
                style={{ color: "rgba(110, 106, 106, 0.85)", fontSize: "18px" }}
              >
                Call Emergency
              </span>
              <span style={{ fontWeight: "bold" }}>(635) 5258-4250</span>
            </div>
          </div>

          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button className={styles.appointmentBtn}>
              <IoIosArrowForward className={styles.arrowIcon} />
              Appointment
            </Button>
          </Link>
          <IoMenu
            className="menuIcon"
            onClick={toggleSideNavbar}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </motion.div>
      <motion.div
        className={`navbar ${show ? "show" : ""}`}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          background: "white",
          alignItems: "center",
          transition: "transform 0.3s ease",
          transform: show ? "translateY(0)" : "translateY(-100%)",
          zIndex: 9999,
        }}
      >
        <div className={styles.NavbarItems1}>
          <Image
            className={styles.LogoImage}
            src="/Images/CureZone.png"
            alt="Logo"
            width={200}
            height={60}
          />
          <span className={styles.navbarLinks}>
            <Link href="/">Home</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/about">About</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/services">Services</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/shop">Shop</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/review">Reviews</Link>
          </span>
          <span className={styles.navbarLinks}>
            <Link href="/contact">Contact Us</Link>
          </span>
          <Link href="/cart" style={{ padding: "0px 10px 0px 0px" }}>
            <ShoppingCartIcon style={{ fontSize: "22px" }} />
            {totalItems > 0 && (
              <CartBadge
                badgeContent={totalItems}
                color="primary"
                overlap="circular"
              />
            )}
          </Link>
          <div className={styles.EmgNo}>
            <LiaHeadsetSolid
              style={{ fontSize: "50px", color: "rgba(156, 205, 240, 1)" }}
            />
            <div style={{ display: "grid", gap: "5px" }}>
              <span
                style={{ color: "rgba(110, 106, 106, 0.85)", fontSize: "18px" }}
              >
                Call Emergency
              </span>
              <span style={{ fontWeight: "bold" }}>(635) 5258-4250</span>
            </div>
          </div>

          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button className={styles.appointmentBtn}>
              <IoIosArrowForward className={styles.arrowIcon} />
              Appointment
            </Button>
          </Link>
          <IoMenu
            className={styles.menuIcon1}
            onClick={toggleSideNavbar}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default MyNavbar;
