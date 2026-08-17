"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-lg border-2 border-lavender bg-white px-4 py-2.5 focus:border-violet-deep transition-colors";
const labelCls = "block font-bold text-sm text-violet-deep mb-1.5";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl bg-lavender p-8 text-center">
        <h3 className="text-xl font-bold text-violet-deep">
          You&apos;re on the list! 🎉
        </h3>
        <p className="mt-2">
          Thank you for registering your interest in the Mega Run and Walk.
          We&apos;ll confirm your registration and share payment details by
          email or SMS.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 grid sm:grid-cols-2 gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="reg-name" className={labelCls}>Full name</label>
        <input id="reg-name" name="name" required className={inputCls} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="reg-age" className={labelCls}>Age</label>
        <input id="reg-age" name="age" type="number" min="1" max="120" required className={inputCls} />
      </div>
      <div>
        <label htmlFor="reg-phone" className={labelCls}>Phone</label>
        <input id="reg-phone" name="phone" type="tel" required className={inputCls} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="reg-email" className={labelCls}>Email</label>
        <input id="reg-email" name="email" type="email" required className={inputCls} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="reg-category" className={labelCls}>Category</label>
        <select id="reg-category" name="category" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose a category</option>
          <option>10km Run</option>
          <option>5km Walk</option>
          <option>Kids&apos; Fun Walk</option>
          <option>Virtual Participation</option>
        </select>
      </div>
      <div>
        <label htmlFor="reg-shirt" className={labelCls}>T-shirt size</label>
        <select id="reg-shirt" name="shirt" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose a size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="reg-emergency" className={labelCls}>
          Emergency contact (name &amp; phone)
        </label>
        <input id="reg-emergency" name="emergency" required className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-8 py-3.5 transition-colors"
        >
          Register for the Run and Walk
        </button>
        <p className="mt-3 text-sm text-charcoal/70">
          Card and M-Pesa payment is launching soon — registering now reserves
          your place at no charge.
        </p>
      </div>
    </form>
  );
}
