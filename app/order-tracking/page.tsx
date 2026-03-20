"use client";

import styles from "@/app/order-tracking/tracking.module.css";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import Footer from "@/app/Components/Footer/Footer";

export default function OrderTrackingPage() {
  const { cart, finalPrice } = useCart();

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

  const subtotal = finalPrice;
  const shipping = 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax + shipping;
  const orderHistory = cart.map((item, index) => ({
    id: String(index + 1).padStart(2, "0"),
    code: "365jYQwb9803",
    product: item.name,
    qty: item.quantity,
    price: item.price,
    status: "Done",
    payout: "Active",
  }));
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
        <div className={styles.container}>
          {/* Track Order Section */}
          <div className={styles.trackerCard}>
            <h3>Track your Order</h3>
            <p>
              Order Code: <strong>365jYQwb9803</strong>
            </p>

            <div className={styles.stepContainer}>
              {["Placed", "Packed", "Shipped", "Delivered"].map((label, i) => (
                <div key={label} className={styles.step}>
                  <div
                    className={`${styles.circle} ${i > 0 ? styles.inactive : ""}`}
                  >
                    ✓
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <p>
              <strong>Your order has been delivered</strong>
            </p>
            <small>DHL Smartmail (tracking number 9287643858643032)</small>
          </div>

          {/* All Orders Table */}
          <div className={styles.tableCard}>
            <h3>All Orders</h3>
            <table className={styles.tableWrapper}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order Code</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Order Status</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.code}</td>
                    <td>{order.product}</td>
                    <td>{order.qty}</td>
                    <td>₹{order.price}</td>
                    <td>
                      <span className={`${styles.badge} ${styles.badgeDone}`}>
                        Done
                      </span>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${styles.badgeActive}`}>
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </motion.div>
    </div>
  );
}
