"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import styles from "../payment/payment.module.css";

export default function PaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState<"upi" | "card">("upi");
  const { finalPrice, cart } = useCart();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: finalPrice }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Doctor Appointment",
      description: "Order Payment",
      order_id: order.id,
      handler: function (response: any) {
        router.push(
          `/order-success?paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`,
        );
      },
      // prefill: {
      //   name: "Test User",
      //   email: "test@example.com",
      //   contact: "9999999999",
      // },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };
  return (
    <div className={styles.payContainer}>
      <div className={styles.payCard}>
        <h1 className={styles.payTitle}>Payment</h1>
        <div className={styles.payItems}>
          {cart.map((item) => (
            <div className={styles.payItem} key={item._id}>
              <span className={styles.ItemName}>{item.name}</span>
              <span className={styles.ItemPrice}>
                ₹{item.price} * {item.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.payTotal}>
          <span>Total: ₹{finalPrice}</span>
        </div>

        <div className={styles.payMethods}>
          <label htmlFor="upi">
            {" "}
            <input
              type="radio"
              name="paymentMethod"
            />{" "}
            UPI
          </label>
          <label htmlFor="card">
            {" "}
            <input
              type="radio"
              name="paymentMethod"
            />{" "}
            Debit / Credit Card
          </label>
        </div>

        <button className={styles.payButton} onClick={handlePayment}>
          Pay ₹{finalPrice}
        </button>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </div>
    </div>
  );
}
