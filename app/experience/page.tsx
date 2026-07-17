import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
export const metadata: Metadata = {
  title: "Experience",
  description:
    "Ananya Gupta’s experience as a full-stack developer intern, machine-learning mentee, and independent product builder.",
  alternates: { canonical: "/experience" },
};
export default function Experience() {
  const groups = [
    ["Frontend", ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]],
    ["Backend", ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication", "Firebase Authentication"]],
    ["Databases", ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]],
    ["Machine Learning", ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]],
    ["Tools", ["Git", "GitHub", "Postman", "Vercel", "Render", "VS Code"]],
  ];
  const workStyle = [
    ["01", "Ownership", "I enjoy taking responsibility for the features I build and seeing them through from idea to deployment."],
    ["02", "Problem solving", "I like breaking complex problems into smaller, manageable pieces before finding a practical solution."],
    ["03", "User first", "I naturally think from the user’s perspective and aim to build software that feels intuitive and useful."],
    ["04", "Continuous learning", "I enjoy exploring new technologies and adapting quickly whenever a project demands it."],
    ["05", "Attention to detail", "I care about the small details that improve the user experience and code quality, while learning to balance polish with efficiency."],
  ];
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Experience · Learning through real work</p>
        <h1>Experience</h1>
        <p>
          Every project, internship, and challenge has shaped the way I approach
          software development. Here’s how I’ve grown from a curious student
          into a developer who enjoys building products with real-world impact.
        </p>
      </header>
      <section className="experience section" aria-labelledby="professional-experience">
        <p className="eyebrow" id="professional-experience">Professional experience</p>
        <article className="experience-row">
          <span>Jan—May 2026</span>
          <div>
            <small>KSoft Solutions</small>
            <h2>Full Stack Developer Intern</h2>
            <p>
              I worked with the development team on real web applications across
              frontend and backend features. My work included authentication,
              API integration, debugging, responsive improvements, and taking
              features from implementation through deployment.
            </p>
            <div className="experience-detail">
              <h3>Key contributions</h3>
              <ul>
                <li>Built authentication and authorization workflows.</li>
                <li>Connected React interfaces with backend REST APIs.</li>
                <li>Developed features with React.js and JavaScript.</li>
                <li>Worked with Firebase Authentication.</li>
                <li>Fixed frontend and backend bugs and improved responsiveness.</li>
              </ul>
              <h3>Technologies</h3>
              <p>React.js · JavaScript · Firebase Authentication · REST APIs · Git · GitHub · HTML · CSS</p>
              <h3>What I learned</h3>
              <p>This internship showed me what production-ready work requires beyond writing code. I learned to collaborate, debug patiently, keep code maintainable, and consider the user while building a feature.</p>
            </div>
          </div>
        </article>
        <article className="experience-row">
          <span>2025</span>
          <div>
            <small>Uber × upGrad MentorMind</small>
            <h2>Machine Learning Project Mentee</h2>
            <p>
              I worked on predicting traffic congestion thirty minutes ahead
              using historical traffic data. The project covered the full
              machine-learning workflow, from exploring raw data to comparing
              and evaluating prediction models.
            </p>
            <div className="experience-detail">
              <h3>Key contributions</h3>
              <ul>
                <li>Performed exploratory data analysis across city junctions.</li>
                <li>Identified traffic patterns and peak-hour trends.</li>
                <li>Prepared data and engineered features for prediction.</li>
                <li>Built, evaluated, and compared machine-learning models.</li>
                <li>Presented findings through clear visualisations.</li>
              </ul>
              <h3>Technologies</h3>
              <p>Python · Pandas · NumPy · Scikit-learn · Matplotlib · Jupyter Notebook</p>
              <h3>What I learned</h3>
              <p>I learned that useful machine learning starts with understanding the data, not choosing an impressive algorithm. The experience strengthened my analytical thinking and gave me a practical view of predictive modelling.</p>
            </div>
          </div>
        </article>
      </section>
      <section className="proof section">
        <div className="proof-card">
          <div>
            <p className="eyebrow">Learning beyond the classroom</p>
            <h2>Building independently<br /><em>taught me ownership.</em></h2>
          </div>
          <div className="proof-notes">
            <span>From idea to product</span>
            <p>MyVigi, CitySetu, and TurningPoint made me think beyond code. I had to understand users, design workflows, structure data, implement authentication, debug problems, and deploy complete applications.</p>
            <span>What changed</span>
            <p>Working independently taught me to make technical decisions, take responsibility for the result, and improve a product through iteration.</p>
          </div>
        </div>
      </section>
      <section className="capabilities section">
        <p className="eyebrow">Technologies I’ve worked with</p>
        <div>
          {groups.map((g) => (
            <div key={g[0] as string}>
              <h2>{g[0]}</h2>
              {(g[1] as string[]).map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          ))}
        </div>
        <p>
          I choose tools based on the problem and I’m comfortable learning
          something new when a project needs it.
        </p>
      </section>
      <section className="values section">
        <p className="eyebrow">How I work</p>
        {workStyle.map(([number, title, copy]) => (
          <div className="value-row" key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
        ))}
      </section>
      <section className="about-cta section">
        <p>Looking ahead.<br /><span>Ready for the next challenge.</span></p>
        <Link className="button primary" href="/projects">
          View projects <Arrow />
        </Link>
      </section>
    </>
  );
}
