import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ananya Gupta about software engineering internships, full-stack developer roles, and project collaborations.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <>
      <header className="page-hero contact-hero">
        <p className="eyebrow">Contact · I’d like to hear from you</p>
        <h1>
          Let’s start a
          <br />
          <span className="serif">conversation.</span>
        </h1>
        <p>
          If you’re hiring for a software engineering internship or full-stack
          role, have a project in mind, or simply want to talk about something
          I’ve built, send me a note.
        </p>
      </header>
      <section className="contact-layout">
        <aside>
          <div>
            <span>Direct email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <span>Response time</span>
            <p>Usually within two working days</p>
          </div>
          <div>
            <span>Location</span>
            <p>Delhi, India · Open to remote and relocation</p>
          </div>
          <div>
            <span>Elsewhere</span>
            <a href={site.github}>GitHub ↗</a>
            <a href={site.linkedin}>LinkedIn ↗</a>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
