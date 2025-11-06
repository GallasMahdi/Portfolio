import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaAppStoreIos } from "react-icons/fa6";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiExpo,
  SiAndroid,
  SiSqlite,
  SiRealm,
  SiRedux,
  SiMetabase,
  SiThemoviedatabase,
} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
  },
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <SiExpo />,
  },
  android: {
    title: "Android",
    bg: "black",
    fg: "white",
    icon: <SiAndroid />,
  },
  ios: {
    title: "iOS",
    bg: "black",
    fg: "white",
    icon: <FaAppStoreIos />,
  },
  asyncStorage: {
    title: "AsyncStorage",
    bg: "black",
    fg: "white",
    icon: <SiThemoviedatabase />, // use a database icon for storage
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  realm: {
    title: "Realm",
    bg: "black",
    fg: "white",
    icon: <SiRealm />,
  },
  redux: {
    title: "Redux",
    bg: "black",
    fg: "white",
    icon: <SiRedux />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "solivera-oil",
    category: "E-Commerce",
    title: "Solivera Oil",
    src: `${BASE_PATH}/solivera-oil/Website.png`,
    screenshots: ["Website.png"],
    live: "https://solivera-oil.com",
    github: "",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Solivera Oil is an elegant e-commerce platform that showcases
            premium natural olive oils. Developed with fast performance and
            user-friendly design, it helps users explore, select, and order
            products seamlessly.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Discover the authentic flavors and premium offerings designed to
            elevate every culinary moment.
          </p>
          <SlideShow images={[`${BASE_PATH}/solivera-oil/Website.png`]} />
        </div>
      );
    },
  },
  {
    id: "2k-eve",
    category: "Portfolio",
    title: "2K Eve Portfolio",
    src: `${BASE_PATH}/2k-eve/2k.png`,
    screenshots: ["2k.png", "2k1.png"],
    live: "https://2k-eve.netlify.app/",
    github: "",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.netlify,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            2K Eve Portfolio is a creative and interactive showcase website
            highlighting modern projects, animations, and unique design
            features. Hosted on Netlify with optimized performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            A modern design with smooth animations and an engaging interface to
            leave a lasting impression.
          </p>
          <SlideShow images={[`${BASE_PATH}/2k-eve/2k.png`]} />
        </div>
      );
    },
  },
  {
    id: "cic-tunisia",
    category: "E-Commerce",
    title: "CIC Tunisia",
    src: `${BASE_PATH}/cic-tn/cic1.png`,
    screenshots: ["cic2.png", "cic3.png", "cic4.png"], // Add other screenshots as needed
    live: "https://cic-tn.com/",
    github: "", // Add repository link if available
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            CIC Tunisia is a dynamic e-commerce website specialized in selling a
            wide range of tech products, including tablets, printers, and
            accessories. The platform is designed for secure browsing, fast
            searching, and seamless checkout.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            A responsive, fast-loading shopping experience with an intuitive
            dashboard and product management system.
          </p>
          <SlideShow images={[`${BASE_PATH}/cic-tn/cic1.png`]} />
        </div>
      );
    },
  },
  {
    id: "audittab-pro",
    category: "Mobile Application",
    title: "AuditTab Pro",
    src: `${BASE_PATH}/audittab/audittab1.png`,
    screenshots: ["audittab3.png", "audittab2.png"],
    live: "https://audittab.com", // Replace with actual Play Store/App Store link
    github: "", // Leave empty if the repo is private
    skills: {
      frontend: [
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.redux,
        PROJECT_SKILLS.asyncStorage,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AuditTab Pro is a smart mobile solution for real-time quality and
            security inspections. The app simplifies field audits, generates
            repair tickets, and supports offline mode. I contributed to this
            project as part of a development team, focusing on UX, data
            synchronization, and core auditing features.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Streamline inspection workflows and manage issues efficiently on the
            go with a mobile-first audit management tool built with React Native
            and Expo.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/audittab/audittab1.png`,
              `${BASE_PATH}/audittab/audittab2.png`,
              `${BASE_PATH}/audittab/audittab3.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
