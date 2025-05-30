"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useSound } from "@/Hooks/Sound/useSound";
import { BiLogoReact, BiLogoTypescript, BiLogoJavascript, BiMoney } from "react-icons/bi";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { SiMongodb, SiSocketdotio, SiTailwindcss, SiNodedotjs, SiExpress, SiGreensock } from "react-icons/si";



const PROJECT_DATA = [
  {
    title: "Periodix - Interactive Periodic Table",
    description: `Periodix is an interactive periodic table application providing detailed information on each element.`,
    details: `Periodix is a user-friendly web application that showcases the entire periodic table with detailed information about each element. The application is designed to help students and chemistry enthusiasts learn more about the periodic elements in an engaging and interactive manner.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
    ],
    imageSrc: "/projects/periodix.png",
    videosrc: "/projects/periodix.mp4",
    githubLink: "https://github.com/priyanshu082/periodix",
    liveLink: "https://periodix-chi.vercel.app/",
  },
  {
    title: "Board Management System",
    description: `A comprehensive platform to streamline educational board operations, from institute registration to student result access.`,
    details: `This system enables institutes to register under a central board and manage student enrollments through multi-step forms with validations. Payment gateways are integrated for both institutes and students. It includes dedicated dashboards for institutes (to register students), students (to view results and manage their credentials), and an admin panel for board members to oversee all activities. The platform also supports course-subject mapping, credential-based logins, and automated email notifications.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "Payment Gateway APIs",
        icon: <BiMoney size={25} />, // substitute with a relevant icon if you have one
      },
    ],
    imageSrc: "/projects/sbcodl.png", // Replace with your actual image path
    videosrc: "/projects/sbcodl.mov",  // Replace with your actual video path
    githubLink: "https://github.com/priyanshu082/solanki_boards", // Replace with actual link
    liveLink: "https://www.sbiea.co.in/", // Replace with actual live URL
  },
  {
    title: "Drone App - Full-Stack E-commerce Website",
    description: `A full-stack e-commerce website for a drone company with a responsive UI and an admin panel for product management.`,
    details: `The Drone App is a comprehensive e-commerce platform designed for a drone company. It features a responsive user interface built with React and Tailwind CSS. The backend is powered by Express.js and Node.js, offering robust RESTful API services. Additionally, the app includes an admin panel for managing products through CRUD operations, enhancing the overall user and admin experience.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={25} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={25} />,
      },
    ],
    imageSrc: "/projects/peryton.png",
    videosrc: "",
    githubLink: "https://github.com/priyanshu082/drone-app",
    liveLink: "https://app.peryton.in",
  },
  {
    title: "ReelKart - E-commerce Platform",
    description: `ReelKart is an innovative e-commerce platform designed for the seamless purchase and sale of goods. It utilizes modern web technologies to offer a dynamic and responsive user experience.`,
    details: `As a Front End Developer at ReelKart, I developed and implemented the dynamic frontend of the platform using Next.js, leveraging its features for server-side rendering, routing, and optimized performance. The user interfaces were built with React components to ensure responsiveness and interactivity.`,
    techStack: [
      {
        name: "Next.js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
    ],
    imageSrc: "/projects/reelkart-poster.png",
    videosrc:"/projects/reelkart.mp4",
    githubLink: "https://github.com/priyanshu082/reelkart",
    liveLink: "https://reelkart-two.vercel.app/",
  },
  {
    title: "AUV ZHCET Website",
    description: `Website for AUV ZHCET club with advanced animations and detailed information display.`,
    details: `Developed the AUV ZHCET website to showcase the club's projects and activities with rich animations and a responsive design. Utilized Next.js for server-side rendering and routing, GSAP for creating engaging animations, and Tailwind CSS for the styling.`,
    techStack: [
      {
        name: "Next.js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "GSAP",
        icon: <SiGreensock size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
    ],
    imageSrc: "/projects/auv.png",
    videosrc: "/projects/auv.mp4",
    githubLink: "https://github.com/priyanshu082/auv-website",
    liveLink: "https://auv-website-mu.vercel.app/",
  },
  {
    title: "Promptopia - AI Prompt Sharing and Management",
    description: `Promptopia is a full-stack application for sharing and managing AI prompts with CRUD operations.`,
    details: `Promptopia is a comprehensive platform for AI prompt sharing and management. Users can create, read, update, and delete AI prompts, fostering a collaborative environment for AI enthusiasts. The application ensures smooth performance and an intuitive user experience.`,
    techStack: [
      {
        name: "Next.js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={25} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={25} />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={25} />,
      },

    ],
    imageSrc: "/projects/promptopia.png",
    videosrc: "",
    githubLink: "https://github.com/priyanshu082/promptopia",
    liveLink: "https://promptopia-beta-two.vercel.app/",
  }, 
  {
    title: "YouTube Clone - Video Streaming Platform",
    description: `A responsive YouTube clone built using React and YouTube API integration.`,
    details: `This YouTube clone mimics the core functionalities of YouTube, providing a seamless video streaming experience. Users can search for videos, view recommendations, and watch their favorite content with ease. The integration with the YouTube API ensures up-to-date content and accurate video data.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },

    ],
    imageSrc: "/projects/youtube.png",
    videosrc: "",
    githubLink: "https://github.com/priyanshu082/youtube_clone",
    liveLink: "https://youtube-clone-hazel-chi.vercel.app/",
  },
  // {
  //   title: "Chat App - Real-Time Chatting Application",
  //   description: `A real-time chatting application with group chat and profile editing features.`,
  //   details: `The Chat App is a real-time messaging platform that allows users to engage in group chats, send messages instantly, and edit their profiles. Built using modern web technologies, it ensures a fast and reliable communication experience.`,
  //   techStack: [
  //     {
  //       name: "Next.js",
  //       icon: <TbBrandNextjs size={25} />,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb size={25} />,
  //     },
  //     {
  //       name: "Socket.io",
  //       icon: <SiSocketdotio size={25} />,
  //     },

  //   ],
  //   imageSrc: "/projects/chat-app-poster.png",
  //   githubLink: "https://github.com/priyanshu082/chatting-app",
  //   liveLink: "https://chat-app.live",
  // },
];


const ProjectSection = () => {
  const { soundEnabled } = useSound();
  const HoverSrc = "/Audio/tap.mp3";
  const ClickSrc = "/Audio/click.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    <div
      className="w-full min-h-screen flex flex-col px-4 mt-12 "
      id="projects"
    >
      <div className="border-b text-center my-8">
        <h1 className="text-2xl text-primary">
          <span>4.</span> Projects
        </h1>
      </div>
      <div className="flex flex-col gap-y-4">
        {PROJECT_DATA.map((project, index) => (
          <Card key={index} className="bg-primary-foreground">
            <CardHeader className="flex flex-col gap-4 border-b ">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="flex flex-col md:flex-row gap-4 items-center  ">
                {project.description}
              </CardDescription>
              <div className="w-full justify-center md:justify-end flex gap-3">
                <Button
                  className="text-white rounded-full z-10"
                  onClick={() => {
                    AudioPlayer(ClickSrc);
                    window.open(project.githubLink);
                  }}
                >
                  <GitHubLogoIcon />
                </Button>
                <Button
                  className="text-white rounded-full z-10"
                  onClick={() => {
                    AudioPlayer(ClickSrc);
                    window.open(project.liveLink);
                  }}
                >
                  <ExternalLinkIcon />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="mt-8 border-b">
              <div className="w-full flex justify-center ">
                {!project.videosrc ?  ( <Image
                  src={project.imageSrc}
                  alt="Periodically"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="rounded-lg glow__background hover:scale-110 transition-all duration-500 ease-linear"
                />):(
                <video
                  src={project.videosrc}
                  width={1000}
                  height={1000}
                  className="rounded-lg hover:scale-[115%] transition-all duration-500 ease-linear"
                  autoPlay muted loop
                  preload="metadata"
                />
                )}
                
              </div>
              <p className="mt-8 ">{project.details}</p>
            </CardContent>
            <CardFooter className="mt-2 flex flex-col">
              <h1 className="text-xl text-primary">Tech Stack:</h1>
              <div className="flex gap-2 flex-wrap">
                {project.techStack.map((tech, i) => (
                  <Badge
                    className="text-white z-10"
                    key={i}
                    onMouseEnter={() => AudioPlayer(HoverSrc)}
                  >
                    {tech.icon}
                    <span className="pl-2">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
