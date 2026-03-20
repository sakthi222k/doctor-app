"use client";

import { useState } from "react";
import styles from "@/app/signup/signup.module.css";
import Link from "next/link";
import Lottie from "lottie-react";
import signUpAnim from "@/public/Animation/Online-Work.json";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/lib/api.js";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Account created successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <h1>Create an Account</h1>
          <form onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className={styles.inputField}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={styles.inputField}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className={styles.inputField}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <select
                name="role"
                className={styles.selectField}
                onChange={handleChange}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <button
              type="submit"
              className={styles.signupBtn}
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <p className={styles.loginText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>

        {/* Right Side Illustration */}
        <div className={styles.illustrationSection}>
          <Lottie style={{width:"400px",height: "400px"
          }} animationData={signUpAnim} />
        </div>
      </div>
    </div>
  );
}
