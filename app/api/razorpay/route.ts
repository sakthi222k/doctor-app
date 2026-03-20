import { NextResponse } from "next/server";
import Razorpay from "razorpay";
export const runtime = "nodejs";

// ✅ Prevent Next.js from running this at build time
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { amount } = await req.json();

  try {
    // ✅ Move inside function (important for deployment)
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Order creation failed" });
  }
}
