"use client";

import { useState, useEffect } from "react";
import styles from "@/app/login/login.module.css";
import Link from "next/link";
import register from "@/public/Animation/register.json";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/Animation/Sandy Loading.json";
import toast from "react-hot-toast";
import {API_BASE_URL}  from "@/app/lib/api.js";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitloading, setSetSubmitLoading] = useState(false);
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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setSetSubmitLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("STATUS:", res.status);
      console.log("RESPONSE:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on role
        if (data.role === "doctor") {
          window.location.href = "dashboard/doctor";
        } else {
          window.location.href = "/doctors";
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSetSubmitLoading(false);
    }
  };

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
        <div className={styles.loginWrapper}>
          <div className={styles.loginContainer}>
            {/* LEFT FORM SECTION */}
            <div className={styles.formSection}>
              <h1>Login To Your Account!</h1>

              <form className={styles.authForm} onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.inputField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.optionsRow}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <Link href="/forgot-password" className={styles.forgotPass}>
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className={styles.loginBtn}
                  disabled={submitloading}
                  onClick={() => toast.success("Login Successfully...")}
                >
                  {submitloading ? "Verifying..." : "Login"}
                </button>
              </form>

              <p className={styles.signupText}>
                Not Registered Yet?{" "}
                <Link href="/signup" className={styles.signupLink}>
                  Sign-Up
                </Link>
              </p>
            </div>

            {/* RIGHT ILLUSTRATION SECTION */}
            <div className={styles.illustrationSection}>
              {/* Replace this src with your actual doctor illustration path */}
              <Lottie
                className={styles.doctorIllustration}
                animationData={register}
              />
              {/* <img
            src="/images/doctor-illustration.png"
            alt="Doctor Illustration"
            className={styles.doctorIllustration}
          /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
