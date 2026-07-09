/**
 * Shared FAQ data. Kept in a plain (non-client) module so both the client
 * <Faq> component and the server-rendered FAQPage JSON-LD read one source.
 */
export const faqs = [
  {
    q: "Do I need any special hardware?",
    a: "No. Lucyd is built on the first study to show this works on a normal smartphone, no headband and no lab. If you have an Apple Watch, Lucyd can use it to detect REM more precisely, but it is completely optional.",
  },
  {
    q: "Is lucid dreaming actually real?",
    a: "Yes. It is a well documented state studied in sleep labs for decades. Lucyd is based on Targeted Lucidity Reactivation from the Northwestern 2024 study, where lucid dreams went from 0.74 to 2.11 per week on average.",
  },
  {
    q: "Will you see my dream journal?",
    a: "No. Your journal, goals, dream signs, and reminders are stored on your device. Dream-sign detection runs on-device using Apple's NaturalLanguage framework. There is no account and no server of ours that your entries are sent to.",
  },
  {
    q: "Does Lucyd guarantee lucid dreams?",
    a: "No, and anyone who promises that is not being honest. Lucid dreaming is a skill. Lucyd gives you a science-backed routine and the right cue at the right moment, then it gets better as it learns your dreams. Consistency does the rest.",
  },
  {
    q: "How does the cue play at night?",
    a: "After a short wind-down, Lucyd times your REM windows and plays your chosen cue sound during them, using your phone or Apple Watch REM detection. Notifications are scheduled locally on your device.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Anytime, from your App Store settings. If your plan includes a free trial, you can cancel before it ends and you will not be charged. Manage or cancel under your Apple ID subscriptions.",
  },
];
