type FooterLink = {
  title: string;
  links: string[];
};

export const footerLinks: FooterLink[] = [
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
    "© 2024 Lexington Themes. All rights reserved. Lexington Themes is not affiliated with Astro or Tailwind Labs team, nor is it endorsed by or sponsored by this ones. A side project by Michael Andreuzza This website was built with React & Tailwind. Crafted in Åland Islands, Finland.",
};

export const topbarLinks = [
  { href: "/", key: "home", title: "Features", hash: "feature" },
  { key: "pricing", title: "Pricing", hash: "pricing" },
  { key: "faq", title: "Faq", hash: "faq" },
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
