"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need any special hardware?",
    a: "No. Lucy is built on the first study to show this works on a normal smartphone, no headband and no lab. If you have an Apple Watch, Lucy can use it to detect REM more precisely, but it is completely optional.",
  },
  {
    q: "Is lucid dreaming actually real?",
    a: "Yes. It is a well documented state studied in sleep labs for decades. Lucy is based on Targeted Lucidity Reactivation from the Northwestern 2024 study, where lucid dreams went from 0.74 to 2.11 per week on average.",
  },
  {
    q: "Will you see my dream journal?",
    a: "No. Your journal, goals, dream signs, and reminders are stored on your device. Dream-sign detection runs on-device using Apple's NaturalLanguage framework. There is no account and no server of ours that your entries are sent to.",
  },
  {
    q: "Does Lucy guarantee lucid dreams?",
    a: "No, and anyone who promises that is not being honest. Lucid dreaming is a skill. Lucy gives you a science-backed routine and the right cue at the right moment, then it gets better as it learns your dreams. Consistency does the rest.",
  },
  {
    q: "How does the cue play at night?",
    a: "After a short wind-down, Lucy times your REM windows and plays your chosen cue sound during them, using your phone or Apple Watch REM detection. Notifications are scheduled locally on your device.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Anytime, from your App Store settings. If your plan includes a free trial, you can cancel before it ends and you will not be charged. Manage or cancel under your Apple ID subscriptions.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-12 divide-y divide-line border-y border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg font-medium text-ink">{item.q}</span>
              <span
                className={`shrink-0 text-steel transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[0.98rem] leading-relaxed text-mist">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
