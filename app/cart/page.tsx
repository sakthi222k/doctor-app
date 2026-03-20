"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import styles from "@/app/cart/cart.module.css";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import { useState, useEffect } from "react";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import Empty from "@/public/Animation/empty.json";
import Link from "next/link";
import { API_MEDICINES_URL } from "../lib/api";

export default function CartPage() {
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

  const { cart, increaseQty, decreaseQty, removeItem, isLoaded } = useCart();
  const router = useRouter();

  if (!isLoaded) {
    return null; // or loader
  }

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <div
        className={styles.emptyCartText}
         
        >
          <h1 className={styles.emptyCartTitle} > Your Cart is Empty Now</h1>
          <p className={styles.emptyCartDesc} >
            Add Items to Get Started
          </p>
          <button
          className={styles.emptyCartButton}
           
          >
            {" "}
            <Link
            className={styles.emptyCartLink}
              href="/shop"
              
            >
              Browse Products
            </Link>
          </button>
        </div>
        <Lottie
        className={styles.emptyCartAnimation}
          animationData={Empty}
        />
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.finalPrice ?? 0) * item.quantity,
    0,
  );

  const freeShippingThreshold = 200;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

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
        <div className={styles.cartContainer}>
          <h1 className={styles.cartTitle}>
            Shopping Cart ({cart.length} items)
          </h1>

          <div className={styles.cartMainLayout}>
            {/* LEFT COLUMN: PRODUCTS */}
            <div className={styles.cartItemsList}>
              {cart.map((item) => (
                <div key={item._id} className={styles.cartItemCard}>
                  <div className={styles.productInfo}>
                    <img
                      src={`${API_MEDICINES_URL}${item.image}`}
                      alt={item.name}
                    />
                    <div className={styles.productDetails}>
                      <h3>{item.name}</h3>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className={styles.quantityControl}>
                    <button onClick={() => decreaseQty(item._id)}>-</button>
                    <span style={{ margin: "0 15px" }}>{item.quantity}</span>
                    <button onClick={() => increaseQty(item._id)}>+</button>
                  </div>

                  <div className={styles.price}>₹{item.finalPrice}</div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <div className={styles.orderSummary}>
              <h3>Order Summary</h3>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>
                  {subtotal >= freeShippingThreshold ? "Free" : "₹50"}
                </span>
              </div>

              {/* Coupon Section */}
              <div className={styles.couponSection}>
                <label>Have a promo code?</label>
                <div className={styles.couponInput}>
                  <input placeholder="Enter code" />
                  <button className={styles.applyBtn}>Apply</button>
                </div>
              </div>

              <div className={styles.summaryTotal}>
                <span>Total Cost</span>
                <span>
                  ₹
                  {subtotal >= freeShippingThreshold ? subtotal : subtotal + 50}
                </span>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={() => router.push("/payment")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
