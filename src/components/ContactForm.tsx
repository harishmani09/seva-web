"use client";

import { useState, FormEvent } from "react";
import PoojaBookingModal from "./PoojaBookingModal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzlrebq";

type Status = "idle" | "submitting" | "success" | "error";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDisplay(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [subject, setSubject] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [poojaDate, setPoojaDate] = useState("");
  const [poojaMembers, setPoojaMembers] = useState(0);

  const isPooja = subject === "Rudrabhishek Pooja";

  function handleSubjectChange(val: string) {
    setSubject(val);
    if (val === "Rudrabhishek Pooja") {
      setShowModal(true);
    } else {
      setPoojaDate("");
      setPoojaMembers(0);
    }
  }

  function handlePoojaConfirm(date: string, members: number) {
    setPoojaDate(date);
    setPoojaMembers(members);
    setShowModal(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isPooja && !poojaDate) {
      setShowModal(true);
      return;
    }

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
        setSubject("");
        setPoojaDate("");
        setPoojaMembers(0);
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
    <>
      {showModal && (
        <PoojaBookingModal
          initialDate={poojaDate}
          initialMembers={poojaMembers || 1}
          onConfirm={handlePoojaConfirm}
          onClose={() => {
            setShowModal(false);
            // If they close without confirming and nothing was booked yet, reset subject
            if (!poojaDate) {
              setSubject("");
            }
          }}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email */}
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

        {/* Phone */}
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

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
            Subject <span className="text-saffron-400">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm"
          >
            <option value="">Select a subject</option>
            <option value="Rudrabhishek Pooja">Rudrabhishek Pooja Booking</option>
            <option value="Volunteer">I want to Volunteer</option>
            <option value="Donation">Donation Enquiry</option>
            <option value="Ram Katha">Ram Katha / Hanuman Katha Invitation</option>
            <option value="General">General Enquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Pooja booking summary pill */}
        {isPooja && poojaDate && (
          <div className="flex flex-wrap items-center gap-3 bg-saffron-50 border border-saffron-200 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-saffron-700">
              <span>📅</span>
              <span className="font-semibold">{formatDisplay(poojaDate)}</span>
            </div>
            <div className="w-px h-4 bg-saffron-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-saffron-700">
              <span>👥</span>
              <span className="font-semibold">{poojaMembers} member{poojaMembers !== 1 ? "s" : ""}</span>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="ml-auto text-xs font-semibold text-saffron-500 underline underline-offset-2 hover:text-saffron-600"
            >
              Edit
            </button>

            {/* Hidden fields that go to Formspree */}
            <input type="hidden" name="pooja_date" value={formatDisplay(poojaDate)} />
            <input type="hidden" name="pooja_members" value={poojaMembers} />
          </div>
        )}

        {/* Pooja not yet booked warning */}
        {isPooja && !poojaDate && (
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
            <span className="text-orange-500 text-sm">⚠️</span>
            <p className="text-orange-700 text-sm">
              Please{" "}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="font-semibold underline underline-offset-2 hover:text-orange-800"
              >
                select a date and number of members
              </button>{" "}
              for your Rudrabhishek Pooja.
            </p>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-apple-gray-900 mb-1.5">
            Message <span className="text-saffron-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={
              isPooja
                ? "Any special requirements or requests for the Rudrabhishek Pooja…"
                : "Tell us how we can help or how you'd like to get involved…"
            }
            className="w-full px-4 py-3 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition text-sm resize-none"
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        {/* Submit */}
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
    </>
  );
}
