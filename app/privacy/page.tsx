import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for ananyagupta.dev",
};
export default function Privacy() {
  return (
    <article className="legal">
      <p className="eyebrow">Privacy · Plain language</p>
      <h1>Your visit is not a product.</h1>
      <p>
        This site collects only what is needed to understand aggregate
        performance and respond when you choose to get in touch.
      </p>
      <h2>Analytics</h2>
      <p>
        Vercel Analytics may collect anonymous, aggregated usage information.
        Google Analytics and Microsoft Clarity run only when their environment
        variables are configured. No advertising profiles are created here.
      </p>
      <h2>Contact</h2>
      <p>
        Information submitted through the contact form is delivered by
        Web3Forms and used only to respond to your message. A hidden field helps
        prevent spam. Please do not include sensitive personal information.
      </p>
      <h2>Your choices</h2>
      <p>
        You can block analytics in your browser. To ask for a contact message to
        be removed, email ananya0810gupta@gmail.com.
      </p>
      <h2>Changes</h2>
      <p>
        This policy was last updated July 13, 2026. Material changes will be
        reflected on this page.
      </p>
    </article>
  );
}
