import sekyu from "../assets/projects/sekyu.png";
import ilocate from "../assets/projects/ilocate.png";
import ipeps from "../assets/projects/ipeps.png";
import pts from "../assets/projects/pts.png";
import sagapai from "../assets/projects/sagapai.png";
import konekta from "../assets/projects/konekta.png";
import running_blog from "../assets/projects/running-blog.png";
import coding_challenge from "../assets/projects/coding-challenge.png";
import k_fashion from "../assets/projects/k-fashion.png";
import budget_ease from "../assets/projects/budget-ease.png";
import water_wise from "../assets/projects/water-wise.png";
import dsacademy from "../assets/projects/dsacademy.gif";
import tea_amore from "../assets/projects/tea-amore.png";

export const projects = [
  {
    id: 1,
    title: "Sekyu",
    description:
      "Sekyu is a fast-paced local PvP desktop game inspired by Capture the Flag, developed during a hackathon it features one-on-one gameplay where each player controls three characters on a single PC.",
    tech: ["C#", "Unity", "Git", "Github"],
    status: "Completed",
    category: "game",
    features: [
      "Local Multiplayer",
      "Fast-Paced Action",
      "Capture the Flag",
      "Power ups",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://thesis-system.com", // Replace with actual URLs
    image: sekyu,
  },
  {
    id: 2,
    title: "iLocate",
    description:
      "iLocate is a web app that finds nearby boarding houses in Iloilo City using the Haversine algorithm.",
    tech: ["React", "Tailwind", "Express", "Mysql", "Postman", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: [
      "Modern UI/UX",
      "API Testing",
      "Database Optimization",
      "Responsive Design",
      "Geolocation Search",
      "Role-based Access Control",
      "Document Upload System",
      "User Authentication",
      "Admin Verification",
    ],
    github: "https://github.com/edge405",
    // live: "https://personal-thesis.com",
    image: ilocate,
  },
  {
    id: 3,
    title: "IPEPS",
    description:
      "A job portal for PESO Iloilo City that offers job postings, training programs, scholarship listings, and an administrative analytics dashboard for efficient management and insights.",
    tech: [
      "React",
      "Tailwind",
      "Python Flask",
      "PostgreSQL",
      "Postman",
      "Git",
      "Github",
    ],
    status: "Completed",
    category: "web",
    features: [
      "Job Postings",
      "Training Programs",
      "Scholarship Listings",
      "Admin Analytics Dashboard",
      "User Authentication",
      "Role-based Access Control",
      "Document Upload System",
      "Admin Verification",
    ],
    github: "https://github.com/edge405",
    live: "https://ipeps-qq7m.vercel.app/",
    image: ipeps,
  },
  {
    id: 4,
    title: "Senior Citizen Pension Tracking System",
    description:
      "A web system for Pianda-an Sur, Alimodian that manages senior records and tracks pension payouts for transparency and efficiency.",
    tech: [
      "Python Flask",
      "PostgreSQL",
      "React",
      "Tailwind",
      "Git",
      "Github",
      "Postman",
    ],
    status: "Completed",
    category: "web",
    features: [
      "User Authentication",
      "Image Upload",
      "Role-based Access",
      "Notifications",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    live: "https://pension-tracking-system-frontend.vercel.app/", // Replace with actual URLs
    image: pts,
  },
  {
    id: 5,
    title: "SAGAP.ai",
    description:
      "An AI-powered web app that uses NLP to match projects with suitable consultants by analyzing expertise and requirements, streamlining the selection process. This was our project for a 24-hour Western Visayas AI hackathon, where we won 2nd place.",
    tech: ["Python Flask", "Tailwind", "JavaScript", "HTML/CSS"],
    status: "Completed",
    category: "web",
    features: [
      "AI-Powered Matching",
      "Ranked Consultant Profiles",
      "Simple, User-Friendly Interface",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://thesis-system.com", // Replace with actual URLs
    image: sagapai,
  },
  {
    id: 6,
    title: "Konekta",
    description:
      "KONEK TA is a Hiligaynon word meaning 'Let's Connect.' It is a social media platform designed to bring users together based on shared interests. Unlike traditional social networks that emphasize broad connections, KONEK TA focuses on interest-based networking, enabling users to discover like-minded individuals, exchange ideas, and engage in meaningful discussions.",
    tech: ["Python Flask", "Tailwind", "React", "Git", "Github"],
    status: "On Going",
    category: "web",
    features: [
      "Interest-Based Networking",
      "Content Creation & Engagement",
      "User Control & Moderation",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://thesis-system.com", // Replace with actual URLs
    image: konekta,
  },
  {
    id: 7,
    title: "Running Blog",
    description:
      "A blogging platform for my classmate to share his running journey. It features user authentication, a like and comment system, and two user roles: regular users (can like and comment) and admins (can create and manage blog posts).",
    tech: ["PHP", "HTML", "CSS", "Javascript", "MySQL", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: [
      "Blog Post Editor",
      "Interactive Comments Section",
      "Like System",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://thesis-system.com", // Replace with actual URLs
    image: running_blog,
  },
  {
    id: 8,
    title: "DSAcademy",
    description:
      "DSAcademy is an online learning platform that offers a variety of courses in data structures and algorithms. It provides lessons, and quizzes to help learners enhance their skills.",
    tech: ["HTML", "CSS", "JavaScript", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: ["Lessons", "Quizzes"],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://waterwise-gamma.vercel.app/", // Replace with actual URLs
    image: dsacademy,
  },
  {
    id: 9,
    title: "K-Fashion",
    description:
      "A blogging platform for fashion enthusiasts to share their style journeys.",
    tech: ["PHP", "HTML", "CSS", "MySQL", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: [
      "Blog Post Editor",
      "Interactive Comments Section",
      "Like System",
    ],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://thesis-system.com", // Replace with actual URLs
    image: k_fashion,
  },
  {
    id: 10,
    title: "Budget Ease",
    description:
      "A comprehensive personal finance management application designed to help you take control of your financial life. Track income, expenses, and savings with intuitive tools and real-time analytics.",
    tech: ["Vite + React", "Tailwind", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: ["Budget Tracking", "Expense Categorization", "Savings Goals"],
    github: "https://github.com/edge405", // Replace with actual URLs
    live: "https://budget-ease-rust.vercel.app/", // Replace with actual URLs
    image: budget_ease,
  },
  {
    id: 11,
    title: "Cracking a Coding Challenge",
    description:
      "A personal project website blog where I tackled a coding challenge to improve my problem-solving skills.",
    tech: ["PHP", "HTML", "CSS", "MySQL", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: [
      "Manage Blog Post",
      "Interactive Comments Section",
      "Like System",
    ],
    github: "https://github.com/edge405",
    live: "https://ejlindayao.ct.ws/",
    image: coding_challenge,
  },
  {
    id: 12,
    title: "Water Wise",
    description:
      "WaterWise helps you maintain proper hydration by tracking your daily water intake and sending helpful reminders. Set your daily goal, log your water consumption, and receive notifications to stay on track with your hydration habits.",
    tech: ["Angular", "Tailwind", "Git", "Github"],
    status: "Completed",
    category: "web",
    features: ["Water Intake Tracking", "Daily Reminders", "Goal Setting"],
    github: "https://github.com/edge405", // Replace with actual URLs
    live: "https://waterwise-gamma.vercel.app/", // Replace with actual URLs
    image: water_wise,
  },
  {
    id: 13,
    title: "Tea Amore Milktea Shop",
    description:
      "Tea Amore is a desktop milktea shop that offers a variety of flavors and toppings to create your perfect drink.",
    tech: ["Java", "Java Swing", "MySQL", "Git", "Github"],
    status: "Completed",
    category: "desktop",
    features: ["Custom Drink Builder", "Order History", "Admin Management"],
    github: "https://github.com/edge405", // Replace with actual URLs
    // live: "https://tea-amore-milktea-shop.com", // Replace with actual URLs
    image: tea_amore,
  },
];
