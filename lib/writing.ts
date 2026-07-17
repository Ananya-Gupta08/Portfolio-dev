export const articles = [
  {
    slug: "realtime-is-a-product-promise",
    title: "What ‘real-time’ actually asks of a product",
    date: "2026-02-18",
    read: "6 min",
    tag: "Engineering",
    excerpt:
      "What I learned about presence, reconnecting clients, and being honest when data may be stale.",
    content: [
      "When an interface says something is live, people assume the information is current. The technology behind it matters, but the user mainly experiences a promise: what I see now reflects what is happening now.",
      "MyVigi made me question how easily we label someone online or offline. A connection can remain open while its data is stale, and a disconnected guard may still have work waiting to sync. I started treating presence as temporary evidence rather than a permanent fact.",
      "That changed the words in the interface too. ‘Active now,’ ‘last confirmed,’ and ‘awaiting sync’ say more than a green or grey dot. Each label describes what the system actually knows instead of pretending to know more.",
      "I came away with a simple lesson: a real-time product should be honest before it is impressive. Fast updates are useful, but clear behaviour when a connection fails is what makes people trust them.",
    ],
  },
  {
    slug: "designing-for-the-exception",
    title: "Why I designed the exceptions first",
    date: "2025-12-04",
    read: "5 min",
    tag: "Product",
    excerpt:
      "A dashboard becomes useful when it makes the next problem obvious instead of displaying everything at once.",
    content: [
      "It is tempting to begin a dashboard with every field available in the database. While working on MyVigi, I found it more useful to begin with a different question: what decision does the supervisor need to make next?",
      "One absent guard matters more than twelve guards who arrived on time. That meant normal activity could stay quiet while late arrivals, missed checkpoints, and open incidents needed to be easy to spot.",
      "The idea affected the backend as well as the screen. An exception needs a reason, an owner, a time, and a way to close it. Simply colouring a table row red does not help someone resolve the problem.",
      "A calm dashboard is not one with less information. It is one that has made a careful decision about which information deserves attention first.",
    ],
  },
  {
    slug: "useful-ai-has-edges",
    title: "AI is more useful when its limits are visible",
    date: "2025-08-23",
    read: "7 min",
    tag: "AI",
    excerpt:
      "What TurningPoint taught me about showing assumptions and keeping the user in control.",
    content: [
      "An empty chat box is easy to build and easy to understand. It also hides important questions: what context is the model using, which statements are facts, and where is it simply making an assumption?",
      "For TurningPoint, I separated facts, assumptions, constraints, and personal values before generating a response. The user can correct any assumption first instead of accepting a polished answer built on the wrong premise.",
      "That structure does not make the model correct all the time. It does make disagreement more useful. A person can identify the exact part that feels wrong and revise it without throwing away everything else.",
      "The project changed how I think about AI products. Capability gets attention, but visible limits and user control are what make the capability worth returning to.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
