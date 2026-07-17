export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  duration: string;
  stack: string[];
  color: string;
  liveUrl?: string;
  repoUrl?: string;
  problem: string;
  goals: string[];
  decisions: { title: string; body: string }[];
  metrics: { value: string; label: string }[];
  challenges: string;
  tradeoffs: string;
  lessons: string;
  future: string[];
  architecture: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "myvigi",
    title: "MyVigi",
    eyebrow: "Real-time operations",
    year: "2025",
    featured: true,
    summary:
      "A guard workforce and patrol monitoring platform that replaces paper registers and manual supervision with one real-time workflow.",
    description:
      "MyVigi brings attendance, patrol verification, shift operations, incident reporting, and emergency response into a single dashboard.",
    role: "Product thinking + full-stack development",
    duration: "Independent project",
    color: "cobalt",
    liveUrl: "https://my-vigi.vercel.app/",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    problem:
      "Traditional guard operations often depend on attendance registers and trust-based patrol reports. Supervisors have limited visibility into whether a route was completed on time, whether checkpoints were visited in sequence, or where a guard is during an emergency.",
    goals: [
      "Digitise attendance, shifts, patrols, leave, and incident workflows",
      "Verify patrol activity through QR checkpoints and live location",
      "Give administrators a real-time view without making field work complicated",
    ],
    decisions: [
      {
        title: "Verify before a patrol begins",
        body: "A guard confirms the assigned location and scans a QR code before starting. This ties a shift to the right place instead of relying only on a manual check-in.",
      },
      {
        title: "Validate checkpoints in sequence",
        body: "Checkpoint scans follow the assigned route order. The workflow makes patrol completion verifiable while remaining straightforward for guards in the field.",
      },
      {
        title: "Keep updates immediate and access controlled",
        body: "Socket.IO updates the administration dashboard without a refresh, while JWT authentication and route-level authorization separate guard and administrator actions.",
      },
    ],
    architecture: [
      "Guard web application",
      "React administration dashboard",
      "Node.js and Express APIs",
      "JWT role authorization",
      "MongoDB and Socket.IO",
    ],
    metrics: [
      { value: "2", label: "role-based workflows" },
      { value: "QR + GPS", label: "shift verification" },
      { value: "Live", label: "patrol and SOS updates" },
    ],
    challenges:
      "The difficult part was connecting many related workflows without making the guard experience heavy. Authentication, location checks, ordered QR scans, attendance, SOS alerts, and approvals all needed to share consistent shift data.",
    tradeoffs:
      "Accountability mattered, but adding too many steps would make the system harder to use in the field. I kept common guard actions focused while placing monitoring and approval controls in the administrator workflow.",
    lessons:
      "This was the first project where I independently designed the complete system. It taught me to think about how different users move through a product, how data travels between features, and how small workflow decisions affect real-world usability.",
    future: [
      "Offline-first patrol capture",
      "Escalation policies by site",
      "Attendance and patrol analytics",
    ],
  },
  {
    slug: "citysetu",
    title: "CitySetu",
    eyebrow: "Civic technology",
    year: "2025",
    featured: true,
    summary:
      "A civic issue reporting platform that connects citizens and local departments through one transparent complaint workflow.",
    description:
      "CitySetu lets citizens report issues and follow their progress while giving departments an organised way to assign, update, and resolve complaints.",
    role: "Research + full-stack development",
    duration: "Independent project",
    color: "tangerine",
    liveUrl: "https://citisetu.vercel.app/",
    stack: [
      "React",
      "REST APIs",
      "Authentication",
      "Role-based dashboards",
      "Responsive UI",
    ],
    problem:
      "Civic complaints about roads, waste, streetlights, or water leaks are often scattered across different channels. Citizens receive unclear updates and may never know whether an issue reached the right department or was actually resolved.",
    goals: [
      "Create one place to register and track civic complaints",
      "Help departments organise and manage incoming issues",
      "Keep the complete complaint lifecycle clear for both sides",
    ],
    decisions: [
      {
        title: "Keep the lifecycle in one system",
        body: "Citizens can submit a complaint and continue tracking it in the same place, while departments manage assignments and status changes through their own dashboard.",
      },
      {
        title: "Design for two different users",
        body: "Citizen and department workflows use the same complaint data but present actions according to each role, keeping both experiences focused.",
      },
      {
        title: "Make progress understandable",
        body: "Status tracking and organised dashboards turn a fragmented process into a visible sequence from registration to departmental resolution.",
      },
    ],
    architecture: [
      "Citizen reporting interface",
      "Authentication and role handling",
      "Complaint management APIs",
      "Database-driven lifecycle",
      "Department dashboard",
    ],
    metrics: [
      { value: "2", label: "user-focused dashboards" },
      { value: "1", label: "central complaint workflow" },
      { value: "End to end", label: "status visibility" },
    ],
    challenges:
      "The main challenge was making one complaint lifecycle clear to people with very different needs and levels of technical comfort. Citizens need a simple reporting flow, while departments need enough structure to manage many requests.",
    tradeoffs:
      "Collecting more information can help departments act, but it can also make reporting feel difficult. I focused on keeping citizen-facing steps simple while preserving the organised data needed for complaint management.",
    lessons:
      "CitySetu taught me that public-service software has to work for people with different levels of technical experience. Clarity, accessibility, and workflow design matter just as much as implementing the feature.",
    future: [
      "SLA-based escalation",
      "Multilingual reporting",
      "Accessibility testing with a wider range of users",
    ],
  },
  {
    slug: "turningpoint",
    title: "TurningPoint",
    eyebrow: "Applied AI",
    year: "2024",
    featured: true,
    summary:
      "An AI-powered decision support platform that organises complex information and presents structured insights without replacing human judgment.",
    description:
      "TurningPoint guides users through a structured workflow and uses AI-assisted analysis to help them consider different perspectives more clearly.",
    role: "Frontend development + API integration",
    duration: "Project collaboration",
    color: "violet",
    repoUrl: "https://github.com/Ananya-Gupta08/Turning-Point",
    stack: ["React", "FastAPI", "Python", "REST APIs", "Data visualization"],
    problem:
      "Important decisions can involve more information and competing factors than a person can comfortably process at once. The project explored how structured workflows and AI-assisted analysis could make that information easier to examine.",
    goals: [
      "Collect the context needed to understand a decision",
      "Present AI-generated insights in a structured, readable way",
      "Support the user’s judgment instead of trying to replace it",
    ],
    decisions: [
      {
        title: "Guide the user before analysing",
        body: "An interactive workflow collects relevant inputs before requesting AI analysis, giving the backend more useful context than an open-ended prompt alone.",
      },
      {
        title: "Connect the interface to AI services",
        body: "The React frontend communicates with FastAPI services through REST APIs and turns returned analysis into components users can read and explore.",
      },
      {
        title: "Make the output easier to act on",
        body: "Structured recommendations and interactive visualisations help users compare information without losing control of the final decision.",
      },
    ],
    architecture: [
      "Interactive React workflow",
      "REST API communication",
      "FastAPI backend",
      "Python AI processing",
      "Structured results and visualisations",
    ],
    metrics: [
      { value: "AI-assisted", label: "decision analysis" },
      { value: "Interactive", label: "guided workflow" },
      { value: "1", label: "human decision-maker" },
    ],
    challenges:
      "The challenge was not only receiving an intelligent response from the backend. The interface also had to organise that response so users could understand the reasoning and decide what to do with it.",
    tradeoffs:
      "A guided workflow asks for more effort than a blank chat box, but it gives the analysis better context and makes the result easier to follow.",
    lessons:
      "TurningPoint introduced me to integrating AI into a real application. I learned that useful AI depends as much on clear presentation and user trust as it does on generating an intelligent output.",
    future: [
      "Decision outcome retrospectives",
      "Collaborative stakeholder views",
      "Local-first confidential mode",
    ],
  },
  {
    slug: "traffic-prediction",
    title: "Traffic, thirty minutes ahead",
    eyebrow: "Machine learning study",
    year: "2025",
    summary:
      "A machine-learning project from the Uber × upGrad MentorMind program that predicts traffic congestion thirty minutes ahead using historical data.",
    description:
      "I analysed traffic behaviour across city junctions, engineered predictive features, and compared models to identify a reliable forecasting approach.",
    role: "Machine Learning Project Mentee",
    duration: "Uber × upGrad MentorMind",
    color: "mint",
    repoUrl: "https://github.com/Ananya-Gupta08/Traffic-congestion-prediction",
    stack: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter"],
    problem:
      "Urban traffic changes across peak hours, weekdays, weekends, seasons, and junctions. Predicting that congestion in advance can support better route planning and smarter transport systems.",
    goals: [
      "Understand traffic patterns before choosing a model",
      "Build useful time-based features from historical data",
      "Compare models and evaluate thirty-minute forecasts",
    ],
    decisions: [
      {
        title: "Explore before modelling",
        body: "I used exploratory analysis and visualisations to compare junctions, identify peak-hour behaviour, and understand how traffic changed over time.",
      },
      {
        title: "Engineer time-based features",
        body: "The forecasting data was prepared with features that represent recurring traffic behaviour across hours, days, and different junctions.",
      },
      {
        title: "Compare prediction models",
        body: "I trained and evaluated multiple machine-learning approaches rather than relying on the first result, then compared their forecasting performance.",
      },
    ],
    architecture: [
      "Historical traffic dataset",
      "Cleaning and preprocessing",
      "Exploratory data analysis",
      "Feature engineering",
      "Model training and evaluation",
    ],
    metrics: [
      { value: "30m", label: "forecast horizon" },
      { value: "Multiple", label: "city junctions analysed" },
      { value: "End to end", label: "machine-learning workflow" },
    ],
    challenges:
      "The most important challenge was finding meaningful patterns in raw historical data. Traffic varied by both time and junction, so preprocessing and exploratory analysis shaped the modelling choices that followed.",
    tradeoffs:
      "More complex models are not automatically more useful. I compared approaches using evaluation results and interpretability rather than choosing an algorithm only because it was more advanced.",
    lessons:
      "This project strengthened my understanding of the complete machine-learning pipeline. More importantly, it taught me that good machine learning begins with understanding the data before choosing an algorithm.",
    future: [
      "Event and road-closure features",
      "Prediction intervals",
      "Drift monitoring dashboard",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
