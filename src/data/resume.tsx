import { Icons } from "@/components/icons";
import { HomeIcon, GalleryVerticalEndIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "zebang",
  initials: "z. l.",
  url: "https://dillion.io",
  location: "Sunnyvale, CA",
  locationLink: "https://www.google.com/maps/place/sunnyvale",
  description:
    "Strategy Consultant turned Software Engineer. Looking forward to how AI will transform the world, one step at a time.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons).",
  avatarUrl: "",
  skills: [
    "Python",
    "Java",
    "React",
    "React Native",
    "Typescript",
    "Node.js",
    "AWS/GCP",
    "Docker",
    "Kubernetes",
    "RAG",
    "LLM Agentic Workflow",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/project", icon: GalleryVerticalEndIcon, label: "Project" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "zebang.li.2012@gmail.com",
    tel: "+1",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zebangeth",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zebangl",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:zebang.li.2012@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Amazon",
      href: "https://aws.amazon.com",
      badges: ["Java", "AWS", "NoSQL", "LLM", "IaaS"],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/aws.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Developed a benchmark generation system for [Amazon Q Code Transformation](https://aws.amazon.com/q/developer/code-transformation/), an LLM-powered product that automates codebase migration, enhancing the evaluation of migration success rates",
    },
    {
      company: "Hexu",
      badges: [],
      href: "",
      location: "Beijing, China",
      title: "Growth and Analytics",
      logoUrl: "/hexu.png",
      start: "Sep 2021",
      end: "Apr 2023",
      description:
        "Owned Profit & Loss of online channels, achieving 3x core metrics growth in 1 year",
    },
    {
      company: "OC&C Strategy Consultants",
      href: "https://www.occstrategy.com/",
      badges: [],
      location: "Shanghai, China",
      title: "Associate Consultant",
      logoUrl: "/occ_blue.webp",
      start: "Aug 2020",
      end: "Sep 2021",
      description:
        "Advised consumer goods and retail clients on growth strategy, market entry, and due diligence projects",
    },
    {
      company: "Fosun RZ Capital",
      href: "https://en.fosun.com",
      badges: [],
      location: "Menlo Park, CA",
      title: "Investment Analyst Intern",
      logoUrl: "/fosun_rz.png",
      start: "Feb 2020",
      end: "May 2020",
      description:
        "Supported enterprise software investments through deal sourcing, due diligence, and portfolio management",
    },
    {
      company: "TikTok",
      href: "https://www.bytedance.com/",
      badges: [],
      location: "Beijing, China",
      title: "Strategy Analyst Intern",
      logoUrl: "/tiktok.png",
      start: "May 2019",
      end: "Aug 2019",
      description:
        "Monetization strategy and analytics: covered South Korea, Russia, and MENA markets; supported TikTok Live 0-1 launch in MENA",
    },
    {
      company: "Uber China (Acquired by Didi)",
      href: "https://web.didiglobal.com/",
      badges: [],
      location: "Beijing, China",
      title: "Strategy Analyst Intern",
      logoUrl: "/uber_china.png",
      start: "Oct 2018",
      end: "Jan 2019",
      description:
        "2019 strategic planning project for DiDi ride-hailing business",
    },
    {
      company: "Boston Consulting Group",
      href: "https://bcg.com",
      badges: [],
      location: "Philadelphia, PA",
      title: "Strategy Consulting Intern",
      logoUrl: "/bcg.jpg",
      start: "Sep 2017",
      end: "Nov 2017",
      description:
        "Feasibility research on the construction of an US agriculture company’s information security center",
    },
  ],
  education: [
    {
      school: "Duke University",
      href: "https://duke.edu/",
      degree: "Master of Science, Computer Engineering",
      logoUrl: "/duke_eng.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of California, Berkeley",
      href: "https://berkeley.edu/",
      degree: "Bachelor of Arts, Economics",
      logoUrl: "/berkeley.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  ],
} as const;
