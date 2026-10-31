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
    tagline: "Async fraud scoring pipeline sustaining 200 TPS (12k transactions/min) at p95 37ms",
    bullets: [
      "Built a 4-stage async risk scoring pipeline on Kafka, Spring Boot, and Redis sustaining 12k+ transactions per minute at p95 37ms with 99.975% end-to-end success across a 60,000 transaction load test",
      "Engineered Redis sliding window velocity analytics and a hot-reloadable rules engine enabling zero-downtime fraud rule deployment",
      "Hardened the system with Resilience4j circuit breakers and dead letter queue classification to stay live through downstream failures",
      "Instrumented end-to-end with OpenTelemetry and Testcontainers, verifying 151-span cross-service traces in Jaeger",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Resilience4j", "OpenTelemetry", "Docker"],
    github: "https://github.com/aryan211103/RiskFlow",
  },
  {
    num: "02",
    title: "Blueprint AI",
    tagline: "LLM pipeline that extracts structured specs from engineering drawings",
    bullets: [
      "Built a React/Node.js/Python pipeline using LLM agents to extract specs from engineering drawings at 92% field accuracy",
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
    bullets: [
      "Scraped 5,000+ student records with Selenium and BeautifulSoup and trained an XGBoost model on GRE scores, GPA, and work experience at 89% accuracy to predict admission chances across US universities, classified into four categories by the factors they weigh most",
      "Built a 200 question quiz across four domains where Judge0 runs and validates answers rather than string matching, then used collaborative filtering to recommend YouTube learning resources from a pool of 1,000+ based on each student's weak areas and what similar students found helpful",
      "Served the full system through a Flask API; research presented at ICCCNT 2025 and accepted for publication in IEEE Xplore (in press)",
    ],
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
    highlight: "1ST PLACE · IBM SKILLSBUILD AI BUILDERS CHALLENGE · MAY 2026",
  },
  {
    num: "05",
    title: "Real Estate Financial Assistant",
    tagline: "Cloud ML assistant routing natural language queries across SageMaker models and SEC filings",
    bullets: [
      "Deployed regression and classification models on AWS SageMaker behind a GCP Vertex AI agent routing queries across Postgres, SEC EDGAR filings, and both ML endpoints, hosted as a live Streamlit app",
      "Integrated AWS Comprehend and Bedrock for press release insight extraction, with a live health check across the database, endpoints, and agent plus exponential backoff retry on rate limits",
    ],
    stack: ["AWS SageMaker", "GCP Vertex AI", "AWS Bedrock", "Postgres", "Python", "Streamlit"],
    github: "https://github.com/aryan211103/financial-assistant",
  },
  {
    num: "06",
    title: "Connect 4 AI",
    tagline: "Random Forest game agent across four difficulties",
    bullets: [
      "Full stack Connect 4 with player vs player and player vs AI modes across four difficulty levels, with a React frontend whose board re-renders automatically on game state changes",
      "Backed by Node.js and Express handling move validation, game logic, and match history storage in MongoDB",
      "Trained a Random Forest AI on 10,000 game scenarios mapping board states to best moves, with difficulty tuned by how often the AI plays its top recommendation versus a random move, reaching an 87% win rate on hard mode",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Random Forest"],
    github: "https://github.com/AtharvKadam21/Connect4",
  },
];
