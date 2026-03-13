"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-surface p-12 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mt-6 font-heading text-xl font-semibold text-text-main">
          Message Sent
        </h3>
        <p className="mt-2 text-text-muted">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-surface p-8 sm:p-10 shadow-sm space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-text-main mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-text-muted/20 bg-bg px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-text-main mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-text-muted/20 bg-bg px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-text-main mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-text-muted/20 bg-bg px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-text-main mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-xl border border-text-muted/20 bg-bg px-4 py-3 text-sm text-text-main transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select a topic</option>
          <option value="quote">Request a Quote</option>
          <option value="product">Product Inquiry</option>
          <option value="delivery">Delivery Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-text-main mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-text-muted/20 bg-bg px-4 py-3 text-sm text-text-main placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us about your project or question..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
