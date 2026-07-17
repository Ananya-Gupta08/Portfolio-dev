"use client";
import { useState } from "react";
import { Arrow, Check } from "@/components/icons";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = new FormData(e.currentTarget);
    const website = String(form.get("website") || "");
    if (website) {
      setState("sent");
      return;
    }
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const inquiryType = String(form.get("subject") || "General enquiry");
    try {
      if (!accessKey) throw new Error("Web3Forms is not configured");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Ananya Gupta Portfolio",
          subject: `Portfolio contact: ${inquiryType}`,
          inquiry_type: inquiryType,
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          botcheck: "",
        }),
      });
      const result = (await res.json()) as { success?: boolean };
      if (!res.ok || !result.success) throw new Error("Delivery failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }
  if (state === "sent")
    return (
      <div className="form-success">
        <span>
          <Check />
        </span>
        <h2>Message received.</h2>
        <p>Thanks for reaching out. I’ll get back to you soon.</p>
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          <span>Your name</span>
          <input
            name="name"
            required
            minLength={2}
            maxLength={80}
            placeholder="Ada Lovelace"
          />
        </label>
        <label>
          <span>Email address</span>
          <input
            name="email"
            type="email"
            required
            maxLength={120}
            placeholder="ada@example.com"
          />
        </label>
      </div>
      <label>
        <span>What would you like to discuss?</span>
        <select name="subject" defaultValue="">
          <option value="" disabled>
            Choose a topic
          </option>
          <option>Internship opportunity</option>
          <option>Full-time opportunity</option>
          <option>Project collaboration</option>
          <option>Just saying hello</option>
        </select>
      </label>
      <label>
        <span>Your message</span>
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={2000}
          rows={6}
          placeholder="Tell me a little about the role, project, or idea…"
        />
      </label>
      <label className="honey" aria-hidden="true">
        Company site
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button primary" disabled={state === "sending"}>
        {state === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send message <Arrow />
          </>
        )}
      </button>
      {state === "error" && (
        <p className="form-error" role="alert">
          That didn’t go through. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
