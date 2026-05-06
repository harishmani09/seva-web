"use client";

import { useState } from "react";

interface PoojaBookingModalProps {
  onConfirm: (date: string, members: number) => void;
  onClose: () => void;
  initialDate?: string;
  initialMembers?: number;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDisplay(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function PoojaBookingModal({
  onConfirm,
  onClose,
  initialDate,
  initialMembers,
}: PoojaBookingModalProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDate, setSelectedDate] = useState<string>(initialDate ?? "");
  const [members, setMembers] = useState<number>(initialMembers ?? 1);
  const [error, setError] = useState("");

  // Build calendar grid
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const toDateStr = (day: number) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  // Prevent navigating before current month
  const isAtMinMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  const handleConfirm = () => {
    if (!selectedDate) { setError("Please select a date for the pooja."); return; }
    if (members < 1) { setError("Please enter the number of members."); return; }
    onConfirm(selectedDate, members);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-apple-gray-100">
          <div>
            <h3 className="text-lg font-bold text-apple-gray-900">Book Rudrabhishek Pooja</h3>
            <p className="text-sm text-apple-gray-600 mt-0.5">Select your preferred date</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-apple-gray-100 hover:bg-apple-gray-200 text-apple-gray-900 transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Calendar */}
          <div>
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                disabled={isAtMinMonth}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-apple-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-semibold text-apple-gray-900">
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <button
                onClick={nextMonth}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-apple-gray-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-xs font-semibold text-apple-gray-600 py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-y-1">
              {cells.map((day, idx) => {
                if (!day) return <div key={idx} />;
                const dateStr = toDateStr(day);
                const past = isPast(day);
                const selected = dateStr === selectedDate;
                const isToday =
                  day === today.getDate() &&
                  viewMonth === today.getMonth() &&
                  viewYear === today.getFullYear();

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={past}
                    onClick={() => { setSelectedDate(dateStr); setError(""); }}
                    className={`
                      mx-auto w-9 h-9 rounded-full text-sm font-medium transition-all
                      ${past ? "text-apple-gray-200 cursor-not-allowed" : "hover:bg-saffron-50 hover:text-saffron-500 cursor-pointer"}
                      ${selected ? "bg-saffron-400 !text-white hover:bg-saffron-500" : ""}
                      ${isToday && !selected ? "ring-2 ring-saffron-400 text-saffron-500" : ""}
                      ${!past && !selected ? "text-apple-gray-900" : ""}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected date display */}
          {selectedDate && (
            <div className="flex items-center gap-2 text-sm text-saffron-600 bg-saffron-50 rounded-xl px-4 py-2.5 border border-saffron-100">
              <span>📅</span>
              <span className="font-medium">Selected: {formatDisplay(selectedDate)}</span>
            </div>
          )}

          {/* Number of members */}
          <div>
            <label className="block text-sm font-medium text-apple-gray-900 mb-1.5">
              Number of Members Coming <span className="text-saffron-400">*</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMembers(m => Math.max(1, m - 1))}
                className="w-10 h-10 rounded-full border-2 border-apple-gray-200 flex items-center justify-center text-xl font-bold text-apple-gray-600 hover:border-saffron-400 hover:text-saffron-400 transition-colors"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={500}
                value={members}
                onChange={(e) => setMembers(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center px-3 py-2.5 rounded-xl border border-apple-gray-200 bg-apple-gray-50 text-apple-gray-900 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setMembers(m => Math.min(500, m + 1))}
                className="w-10 h-10 rounded-full border-2 border-apple-gray-200 flex items-center justify-center text-xl font-bold text-apple-gray-600 hover:border-saffron-400 hover:text-saffron-400 transition-colors"
              >
                +
              </button>
              <span className="text-sm text-apple-gray-600">person{members !== 1 ? "s" : ""}</span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border-2 border-apple-gray-200 text-apple-gray-700 font-semibold text-sm hover:border-apple-gray-300 hover:bg-apple-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 py-3 px-4 rounded-xl bg-saffron-400 text-white font-semibold text-sm hover:bg-saffron-500 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
