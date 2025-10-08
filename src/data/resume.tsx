import { Icons } from "@/components/icons";
import { HomeIcon, GalleryVerticalEndIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "zebang",
  initials: "z. l.",
  url: "https://zebang.li",
  location: "Sunnyvale, CA",
  locationLink: "https://www.google.com/maps/place/sunnyvale",
  description:
    "Strategy Consultant turned Software Engineer. Looking forward to how AI will transform the world, one line of code at a time.",
  summary:
    "I started my career [solving business puzzles for big brands](/#work), but soon found myself drawn to the world of software engineering and AI. I pursued [degrees in computer engineering and economics](/#education). Now, I'm focused on [building cool tech products](/#projects), from AI-powered tools to full-stack apps, all while trying to catch a glimpse of the tech future ahead.",
  avatarUrl: "/zebang_pixel.webp",
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
    { href: "/#projects", icon: GalleryVerticalEndIcon, label: "Project" },
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
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/aws.png",
      start: "05/2024",
      end: "Present",
      description:
        "Designed and engineered a benchmark generation system for [Amazon Q Code Transformation](https://aws.amazon.com/q/developer/code-transformation/), an LLM-powered product that automates codebase migration, enhancing the evaluation of migration success rates",
    },
    {
      company: "Hexu",
      badges: [],
      href: "",
      location: "Beijing, China",
      title: "Growth and Analytics",
      logoUrl: "/hexu.png",
      start: "09/2021",
      end: "04/2023",
      description: "Owned Profit & Loss of online channels, achieving 3x core metrics growth in 1 year",
    },
    {
      company: "OC&C Strategy Consultants",
      href: "https://www.occstrategy.com/",
      badges: [],
      location: "Shanghai, China",
      title: "Associate Consultant",
      logoUrl: "/occ_blue.webp",
      start: "08/2020",
      end: "09/2021",
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
      start: "02/2020",
      end: "05/2020",
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
      start: "05/2019",
      end: "08/2019",
      description:
        "Monetization strategy and analytics: covered South Korea, Russia, and MENA markets; supported TikTok Live 0-1 launch in MENA",
    },
    {
      company: "Uber China (now DiDi)",
      href: "https://web.didiglobal.com/",
      badges: [],
      location: "Beijing, China",
      title: "Strategy Analyst Intern",
      logoUrl: "/uber_china.png",
      start: "10/2018",
      end: "01/2019",
      description: "2019 strategic planning project for DiDi ride-hailing business",
    },
    {
      company: "Boston Consulting Group",
      href: "https://bcg.com",
      badges: [],
      location: "Philadelphia, PA",
      title: "Strategy Consulting Intern",
      logoUrl: "/bcg.jpg",
      start: "09/2017",
      end: "11/2017",
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
      title: "AI Closet",
      href: "https://github.com/zebangeth/ai-closet/tree/main",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "A mobile app that helps users digitize their closet, get outfit inspirations, and virtually try on clothes of their own or from online stores.",
      technologies: ["Typescript", "React Native", "Expo", "AWS", "Comfy UI", "Figma"],
      links: [
        {
          type: "Source",
          href: "https://github.com/zebangeth/ai-closet/tree/main",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/ai-closet",
          icon: <Icons.notion className="size-3" />,
        },
      ],
      image: "/ai_closet.png",
      video: "",
    },
    {
      title: "rent-or-buy.homes",
      href: "https://rent-or-buy.homes",
      dates: "Jul 2025",
      active: true,
      description:
        "A web app that helps you figure out whether buying or renting a home makes you richer. We're talking about differences that can reach hundreds of thousands or even millions of dollars.",
      technologies: ["React", "Vite", "TailwindCSS", "Claude Code"],
      links: [
        {
          type: "Website",
          href: "https://rent-or-buy.homes",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zebangeth/rent-or-buy.homes",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/rent-or-buy",
          icon: <Icons.notion className="size-3" />,
        },
      ],
      image: "/rent-or-buy.png",
      video: "",
    },
    {
      title: "Insight Reviews",
      href: "https://insightful.streamlit.app/",
      dates: "Jun 2023 - Aug 2023",
      active: true,
      description: "A GPT-powered e-commerce product review analysis platform for e-commerce sellers.",
      technologies: ["LLM", "Langchain", "Python", "Pandas", "Streamlit", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://insightful.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zebangeth/Insight_Reviews",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/insight_reviews.png",
      video: "",
    },
    {
      title: "DirPrint",
      href: "https://pypi.org/project/DirPrint/",
      dates: "Mar 2024",
      active: true,
      description:
        "A command-line tool that simplifies the process of sharing of your project's directory structure and file contents, making it ideal for collaboration with LLMs (like ChatGPT, Claude, etc.).",
      technologies: ["Python", "Command Line Tool"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/DirPrint/",
          icon: <Icons.Python className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zebangeth/DirPrint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "CampusCycle",
      href: "https://github.com/zebangeth/CampusCycle",
      dates: "Mar 2024",
      active: true,
      description:
        "A localized e-commerce platform designed specifically for college students to buy and sell used goods and furniture. This platform addresses the needs of college students who frequently move, offering an affordable, sustainable, and community-driven solution.",
      technologies: [
        "Vue.js",
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/zebangeth/CampusCycle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/campus_cycle.png",
      video: "",
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
