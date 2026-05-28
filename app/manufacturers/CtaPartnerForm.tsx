"use client";

import { useState, type FormEvent } from "react";

export function CtaPartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="cta-partner-form" onSubmit={onSubmit}>
      <div className="form-row">
        <span className="lbl">Company</span>
        <input type="text" placeholder="Manufacturer name" name="company" />
      </div>
      <div className="form-row">
        <span className="lbl">You</span>
        <input type="text" placeholder="Name & title" name="name" />
      </div>
      <div className="form-row">
        <span className="lbl">Email</span>
        <input type="email" placeholder="partner@company.com" name="email" />
      </div>
      <div className="form-row">
        <span className="lbl">Category</span>
        <select name="category" defaultValue="Propulsion">
          <option>Propulsion</option>
          <option>Navigation</option>
          <option>Power</option>
          <option>Comms</option>
          <option>HVAC</option>
          <option>Hydraulics</option>
          <option>Lighting</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="form-submit-partner">
        <span>{submitted ? "Welcome aboard." : "Become a partner"}</span>
        <span className="arrow" />
      </button>
    </form>
  );
}
