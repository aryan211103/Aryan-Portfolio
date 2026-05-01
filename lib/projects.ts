export type Project = {
  num: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Toxiq",
    tagline: "Real-time content moderation pipeline",
    description:
      "Toxiq is a distributed backend system built across four microservices — API Gateway, Auth Service, Post Service, and Moderation Service which handles content submission and automated moderation the way real platforms like Twitter or YouTube do it internally. When a user submits a post, the Post Service saves it and instantly fires an event to a Kafka topic so the user gets a response right away without waiting for moderation to finish. The Moderation Service picks that event up from Kafka, runs the content through a rule based scoring engine checking for banned keywords, suspicious patterns, and behavioral signals like posting too fast, then marks the post as approved or flagged in PostgreSQL. Redis sits on top of the database as a cache so frequent reads never hit PostgreSQL directly, and the whole thing spins up with one Docker Compose command across all services.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "AWS"],
    // No public repo link yet — uncomment and fill when ready:
    // github: "https://github.com/aryan211103/toxiq",
  },
  {
    num: "02",
    title: "Personalized Module Recommendation System",
    tagline: "ML-driven admission predictor + curated learning paths",
    description:
      "This system predicts a student's chances of getting into US universities and recommends YouTube learning resources based on where they are weak. I scraped 5000 plus student records using Selenium and BeautifulSoup, trained an XGBoost model on GRE scores, GPA, and work experience that hit 89% accuracy, and classified universities into four categories based on what factors they weigh most. Students also take a 200 question quiz across four domains where Judge0 actually runs and validates their answers rather than just string matching, and then collaborative filtering recommends YouTube videos from a pool of 1000 plus based on what similar students with similar weak areas found helpful. The whole thing is served through a Flask API and the research was published at ICCCNT 2025 and accepted to IEEE Xplore.",
    stack: ["Python", "XGBoost", "Flask", "MongoDB", "Selenium", "BeautifulSoup"],
    github: "https://github.com/aryan211103/MajorProject",
    highlight: "IEEE ICCCNT 2025 · IN PRESS",
  },
  {
    num: "03",
    title: "Connect 4 AI",
    tagline: "Random Forest game agent across four difficulties",
    description:
      "This is a full stack Connect 4 game with player versus player and player versus AI modes built across four difficulty levels. The frontend is React where the board is a grid of components that re-render automatically when game state changes, and the backend is Node.js with Express handling move validation, game logic, and storing match history in MongoDB. The AI was trained on 10,000 game scenarios as a Random Forest model where each scenario was a board state and the label was the best move to make, and difficulty levels work by adjusting how often the AI plays the model's top recommendation versus a random move, which pushed the win rate up to 87% on hard mode.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Random Forest"],
    github: "https://github.com/AtharvKadam21/Connect4",
  },
  {
    num: "04",
    title: "NGO Donation Platform",
    tagline: "Connecting Mumbai donors to nearby NGOs",
    description:
      "This is a platform I built for users in Mumbai to find nearby NGOs that accept donations of stationery, clothes, and food, built with HTML, CSS, JavaScript, PHP, and MySQL. It has role based access where donors can browse NGO requests and respond to them while NGOs can post what they need and accept or decline incoming donations. I also added an online money donation feature which none of the comparable platforms in that space had at the time, making it a more complete solution for connecting donors with NGOs.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/aryan211103/NGO-website",
  },
];
