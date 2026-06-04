export type Project = {
  num: string;
  title: string;
  tagline: string;
  description?: string;
  bullets?: string[];
  stack: string[];
  github?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "RiskFlow",
    tagline: "Async fraud scoring pipeline sustaining 12k+ TPS at p99 < 110ms",
    bullets: [
      "Built a 4-stage async risk scoring pipeline on Kafka, Spring Boot, and Redis sustaining 12k+ transactions per minute at p99 under 110ms with 99.97% end-to-end success across a 60,000 transaction load test",
      "Engineered Redis sliding window velocity analytics and a hot-reloadable rules engine enabling zero-downtime fraud rule deployment",
      "Hardened the system with Resilience4j circuit breakers and dead letter queue classification to stay live through downstream failures",
      "Shipped a TypeScript MCP server exposing 8 tools, validated in Claude Desktop, enabling LLM-driven fraud analyst workflows",
      "Instrumented end-to-end with OpenTelemetry and Testcontainers, verifying 151-span cross-service traces in Jaeger",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Resilience4j", "OpenTelemetry", "TypeScript", "Docker"],
    github: "https://github.com/aryan211103/RiskFlow",
  },
  {
    num: "02",
    title: "Blueprint AI",
    tagline: "LLM pipeline that extracts structured specs from engineering drawings",
    bullets: [
      "Built a React/Node.js/Python pipeline using the Claude API to extract specs from engineering drawings at 92% field accuracy, cutting engineer correction time by 70%",
      "Designed a dual-parser fallback (pdfplumber and PyMuPDF) with per-field confidence scoring to route uncertain extractions to human review",
      "Automated BOM reconciliation across 200+ line items, catching quantity mismatches before production",
      "Exposed an MCP server with get_part_specs, get_dimensions, and reconcile_bom so an LLM pulls structured part data on demand",
    ],
    stack: ["React", "Node.js", "Python", "Claude API", "pdfplumber", "PyMuPDF", "MCP"],
    github: "https://github.com/aryan211103/Blueprint-AI",
  },
  {
    num: "03",
    title: "Personalized Module Recommendation System",
    tagline: "ML-driven admission predictor + curated learning paths",
    description:
      "This system predicts a student's chances of getting into US universities and recommends YouTube learning resources based on where they are weak. I scraped 5000 plus student records using Selenium and BeautifulSoup, trained an XGBoost model on GRE scores, GPA, and work experience that hit 89% accuracy, and classified universities into four categories based on what factors they weigh most. Students also take a 200 question quiz across four domains where Judge0 actually runs and validates their answers rather than just string matching, and then collaborative filtering recommends YouTube videos from a pool of 1000 plus based on what similar students with similar weak areas found helpful. The whole thing is served through a Flask API and the research was published at ICCCNT 2025 and accepted to IEEE Xplore.",
    stack: ["Python", "XGBoost", "Flask", "MongoDB", "Selenium", "BeautifulSoup"],
    github: "https://github.com/aryan211103/MajorProject",
    highlight: "IEEE ICCCNT 2025 · IN PRESS",
  },
  {
    num: "04",
    title: "PitStrat AI",
    tagline: "F1 race strategy simulator with XGBoost tyre degradation and LLM analysis",
    bullets: [
      "Built a full-stack F1 strategy simulator (FastAPI, React) that replays any race across 4 seasons and simulates alternate pit strategies lap by lap",
      "Trained an XGBoost tyre degradation model on 71,999 lap records over 72 races, hitting 1.95s MAE and R² 0.87",
      "Integrated IBM Granite through 5 typed MCP tools so natural language questions resolve against real simulation data instead of hallucinating",
      "Modeled safety car windows from FastF1 track status, dropping simulated pit loss from 22s to 10s to match real strategic timing",
      "Validated on the 2025 Qatar GP, reproducing the McLaren call that cost Piastri the win by 12.5s in two clicks",
    ],
    stack: ["FastAPI", "React", "XGBoost", "FastF1", "IBM Granite", "MCP", "Python"],
    github: "https://github.com/aryan211103/pitstrat-ai",
  },
  {
    num: "05",
    title: "Connect 4 AI",
    tagline: "Random Forest game agent across four difficulties",
    description:
      "This is a full stack Connect 4 game with player versus player and player versus AI modes built across four difficulty levels. The frontend is React where the board is a grid of components that re-render automatically when game state changes, and the backend is Node.js with Express handling move validation, game logic, and storing match history in MongoDB. The AI was trained on 10,000 game scenarios as a Random Forest model where each scenario was a board state and the label was the best move to make, and difficulty levels work by adjusting how often the AI plays the model's top recommendation versus a random move, which pushed the win rate up to 87% on hard mode.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Random Forest"],
    github: "https://github.com/AtharvKadam21/Connect4",
  },
  {
    num: "06",
    title: "NGO Donation Platform",
    tagline: "Connecting Mumbai donors to nearby NGOs",
    description:
      "This is a platform I built for users in Mumbai to find nearby NGOs that accept donations of stationery, clothes, and food, built with HTML, CSS, JavaScript, PHP, and MySQL. It has role based access where donors can browse NGO requests and respond to them while NGOs can post what they need and accept or decline incoming donations. I also added an online money donation feature which none of the comparable platforms in that space had at the time, making it a more complete solution for connecting donors with NGOs.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/aryan211103/NGO-website",
  },
];
