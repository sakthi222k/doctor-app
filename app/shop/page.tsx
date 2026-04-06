"use client";

import styles from "../shop/shop.module.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import MyNavbar from "../Components/MyNavbar/MyNavbar";
import Header from "../Components/Header/Header";
import Image from "next/image";
import BannerSlide from "../Components/BannerSlide/BannerSlide";
import Footer from "../Components/Footer/Footer";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { API_MEDICINES_URL } from "../lib/api";

export default function ShopPage() {
  const [loading, setLoading] = useState(true);

  const {addToCart} = useCart();

  useEffect(() => {
    // // Pre-remove any HTML preloader (optional)
    // const pre = document.getElementById("initial-preloader");
    // if (pre) pre.remove();

    // simulate data load
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // go to top
  }, []);

    interface Medicine {
      _id: string | null | undefined;
      name: string;
      category: string;
      price: number;
      manufacturer: string;
      prescriptionRequired: boolean;
      description: string;
      image: string;
      discount?: number;
      finalPrice?: number;
      deliveryBy?: string;
    }

    const [medicines, setMedicines] = useState<Medicine[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${API_MEDICINES_URL}/api/medicines`);
          const data = await res.json();
          setMedicines(data);
        } catch (err) {
          console.error("Error fetching medicines:", err);
        } finally {
          setLoading(false); // ✅ only stop loading after API completes
        }
      };

      fetchData();
    }, []);

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
              className={styles.lottieAnime}
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
        <BannerSlide />
        <div>
          <div className={styles.featured}>
            <h2 className={styles.featuredTitle}>Featured Medicines</h2>
            <p className={styles.featuredDesc}>
              Quality healthcare products delivered to your doorstep.
            </p>
          </div>
          <div className={styles.gridContainer}>
            {medicines.map((medicines) => {
              return (
                <div key={medicines._id} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`${API_MEDICINES_URL}${medicines.image}`}
                      alt={medicines.name}
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className={styles.medicineDetails}>
                    <h1 className={styles.medicineName}>{medicines.name}</h1>
                    <p className={styles.medicineManufacturer}>
                      {medicines.manufacturer}
                    </p>
                    <p className={styles.medicineDescription}>
                      {medicines.description}
                    </p>

                    <p className={styles.medicinePrice}>
                      ₹{medicines.finalPrice}
                      <span className={styles.originalPrice}>
                        ₹{medicines.price}
                      </span>
                      <span className={styles.discountPercentage}>
                        {medicines.discount}% OFF
                      </span>
                    </p>
                    <p className={styles.medicinDeliveryDate}>
                      Delivery: {medicines.deliveryBy}
                    </p>

                    <p className={styles.medicineCategory}>
                      {medicines.category}
                    </p>
                    <button
                      className={styles.medicineBtn}
                      onClick={() => {
                        addToCart({
                          _id: medicines._id!,
                          name: medicines.name,
                          price: medicines.price,
                          finalPrice: medicines.finalPrice!,
                          image: medicines.image,
                          quantity: 1,
                        });
                        toast.success("Added to Cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
