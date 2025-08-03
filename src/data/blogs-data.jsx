import grad_pic from "../assets/blogs/graduation-picture.jpg";
import message from "../assets/blogs/message.jpg";
import { Life_After_Graduation } from "../components/blogs/Life_After_Graduation";
import { PastSelf_Message } from "../components/blogs/PastSelf_Message";

export const blogPosts = [
  {
    id: 1,
    title: "My Life after Graduation",
    excerpt: "Sharing my thoughts and experiences on life after graduation",
    date: "2025-07-11",
    fullContent: <Life_After_Graduation />,
    readTime: "1 min",
    category: "Reflection",
    tags: ["Life", "Realization", "Learning"],
    image: grad_pic,
  },
  {
    id: 2,
    title: "Message to My Past Self",
    excerpt: "A message I wish I could send to my past self",
    date: "2025-07-24",
    fullContent: <PastSelf_Message />,
    readTime: "2 min",
    category: "Reflection",
    tags: ["Advice", "Motivation", "Self-Reflection"],
    image: message,
  },
];
