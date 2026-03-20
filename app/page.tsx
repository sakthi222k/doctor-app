"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy-Loading.json";
import Header from "@/app/Components/Header/Header";
import MyNavbar from "@/app/Components/MyNavbar/MyNavbar";
import HomePage from "@/app/Components/Home/Home";
import About from "@/app/Components/About/About";
import Services from "@/app/Components/Services/Services";
import Review from "@/app/Components/Review/Review";
import Logo from "@/app/Components/Logo/Logo";
import MeetYourDoctor from "@/app/Components/MeetYourDoctor/MeetYourDoctor";
import Footer from "@/app/Components/Footer/Footer";

export default function RootPage() {
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

  return (
    <>
      {/* AnimatePresence handles fade-out */}
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

      {/* Your actual website */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <MyNavbar />
        <HomePage />
        <About style={undefined} />
        <Services />
        <Review />
        <Logo />
        <MeetYourDoctor />
        <Footer />
      </motion.div>
    </>
  );
}
