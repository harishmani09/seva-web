"use client";

import { useState, FormEvent } from "react";

// Replace YOUR_FORM_ID with your actual Formspree form ID
// Get one free at https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been received. We will get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-5 py-2 text-sm font-semibold text-green-700 border border-green-300 rounded-full hover:bg-green-100 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
            Full Name <span className="text-saffron-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
            Email Address <span className="text-saffron-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
          Subject <span className="text-saffron-400">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm"
        >
          <option value="">Select a subject</option>
          <option value="Volunteer">I want to Volunteer</option>
          <option value="Donation">Donation Enquiry</option>
          <option value="Ram Katha">Ram Katha / Hanuman Katha Invitation</option>
          <option value="General">General Enquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
          Message <span className="text-saffron-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help or how you'd like to get involved..."
          className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 px-6 bg-saffron-400 text-white font-semibold rounded-xl hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-apple-gray-600 text-center">
        By submitting this form you agree to our privacy policy. We will never share your information.
      </p>
    </form>
  );
}
