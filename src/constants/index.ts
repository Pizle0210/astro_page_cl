import figma from "../assets/Figma.svg";
import canva from "../assets/Canva.svg";
import stripe from "../assets/Stripe.svg";
import gitLab from "../assets/Gitlab.svg";
import linear from "../assets/Linear.svg";
import gumroad from "../assets/Gumroad.svg";

export type FooterLinkType = {
  title: string;
  links: string[];
};

export const footerLinks: FooterLinkType[] = [
  {
    title: "All pages",
    links: ["Home", "FAQ", "Terms", "Privacy", "Sign up", "Sign In"],
  },
  {
    title: "Resources",
    links: ["Github repo"],
  },
  {
    title: "More themes",
    links: ["Lexington Themes"],
  },
  {
    title: "Socials",
    links: ["@lexingtonthemes", "@Mike_Andreuzza"],
  },
];

export const footerDescription = {
  description:
    "2024 Lexington Themes. All rights reserved. Lexington Themes is not affiliated with Astro or Tailwind Labs team, nor is it endorsed by or sponsored by this ones. A side project by Michael Andreuzza This website was built with React & Tailwind. Crafted in Åland Islands, Finland.",
};

export const topbarLinks = [
  { href: "/", key: "home", title: "Features", hash: "#features" },
  { key: "pricing", title: "Pricing", hash: "#pricing" },
  { href: "/faq", key: "faq", title: "Faq", hash: "faq" },
  { href: "/sign-up", key: "signup", title: "Sign up", hash: "signup" },
  { href: "/sign-in", key: "login", title: "Log in", hash: "login" },
];

export const topThreeDescription = [
  {
    content:
      "Astro, TailwindCSS and Alpine.js - This are the popular technologies behind Astrosaas.",
  },
  {
    content:
      "Includes 6 pages - You will find this landing, faq, terms,privacy,sign up and sign in pages.",
  },
  {
    content:
      "Different section - The starter includes different feature sections, a pricing table, testmionial, CTA and full forms.",
  },
];

// brands
export const brandImages = [
  {
    src: figma,
    width: 70,
    height: 32,
  },
  {
    src: canva,
    width: 70,
    height: 32,
  },
  {
    src: stripe,
    width: 70,
    height: 35,
  },
  {
    src: gitLab,
    width: 85,
    height: 30,
  },
  {
    src: linear,
    width: 95,
    height: 32,
  },
  {
    src: gumroad,
    width: 100,
    height: 32,
  },
];

export const cardData = [
  {
    price: "$0",
    name: "Free Plan",
    desc: "Basic access to the platform",
    benefits: [
      "Access to basic features",
      "1GB storage",
      "Basic support",
      "Limited features",
    ],
  },
  {
    price: "$19.99",
    name: "Starter Plan",
    desc: "Ideal for freelancers, small startups, or personal use.",
    benefits: [
      "Access to all features",
      "Email support",
      "10 GB storage",
      "1-3 users",
      "Core features",
      "7-days free trial",
    ],
  },
  {
    price: "$49.99",
    name: "Pro Plan",
    desc: "Best for growing businesses, teams, or professionals who need enhanced functionality.",
    benefits: [
      "Priority support",
      "50 GB storage",
      "Up to 10 users",
      "Advanced analytics",
      "14-days free trial",
    ],
  },
  {
    price: "$149.99",
    name: "Business Plan",
    desc: "Suitable for medium-sized businesses, teams, or organizations.",
    benefits: [
      "Dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "30-days free trial",
      "Enhanced security",
      "Team management tools",
    ],
  },
];