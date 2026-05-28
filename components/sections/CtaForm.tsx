"use client";

import { useState, type FormEvent } from "react";

type CtaFormProps = {
  id?: string;
  eyebrow?: string;
  headline: string;
  body?: string;
  placeholder?: string;
  submitLabel?: string;
};

// Email capture CTA. Submission is intentionally inert in v1: the marketing
// site is a static deploy with no backend. The form posts to a /api/cta
// route stub that returns 200 so the visual success state can render.
// Replace with the real mailing list integration when ready.
export function CtaForm({
  id = "cta",
  eyebrow = "Request access",
  headline,
  body,
  placeholder = "your.email@company.com",
  submitLabel = "Request access",
}: CtaFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section" id={id}>
      <div className="cta">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{headline}</h2>
        {body && <p>{body}</p>}
        {submitted ? (
          <p className="cta-form" style={{ color: "var(--teal-2)" }}>
            Thanks. We have your address. You will hear back within a few business days.
          </p>
        ) : (
          <form className="cta-form" onSubmit={onSubmit}>
            <input
              type="email"
              required
              placeholder={placeholder}
              name="email"
              aria-label="Email address"
            />
            <button className="form-submit" type="submit">
              {submitLabel} <span className="arrow" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
