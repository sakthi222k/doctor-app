"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import successCheck from "@/public/Animation/Success-Check.json";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/order-success/order.module.css";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { API_MEDICINES_URL } from "../lib/api";


export default function OrderSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
  const { finalPrice, cart } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const idFromUrl = searchParams.get("orderId");

    if (idFromUrl) {
      setOrderId(idFromUrl);
    } else {
      setOrderId(`ORD${Math.floor(Math.random() * 10000)}`);
    }
  }, [searchParams]);

  if (!orderId) return null;
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
        <div className={styles.successContainer}>
          <div className={styles.successCard}>
            {/* Green Checkmark */}
            <div className={styles.successIcon}>
              <Lottie
                className={styles.doctorIllustration}
                animationData={successCheck}
                loop={false}
                autoplay={true}
              />
              {/* <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg> */}
            </div>

            <h1 className={styles.successTitle}>Thank you for your purchase</h1>
            <p className={styles.successSubtitle}>
              We've received your order and it will ship in 5–7 business days.
            </p>
            <p className={styles.orderNumber}>
              Your order number is <strong>#{orderId}</strong>
            </p>

            {/* Order Summary */}
            <div className={styles.orderSummary}>
              {cart.map((item) => (
                <div key={item._id} className={styles.orderItem}>
                  <div className={styles.itemInfo}>
                    <img
                      src={`${API_MEDICINES_URL}${item.image}`}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <div>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemQty}>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>
                    ₹{(item.finalPrice ?? 0) * item.quantity}
                  </div>
                </div>
              ))}

              <div className={styles.orderTotal}>
                <span>Total</span>
                <span>₹{finalPrice}</span>
              </div>
            </div>

            <Link href="/order-tracking">
              <button className={styles.homeButton}> Track Order </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
