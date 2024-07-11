import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const WorkExperienceSection = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center px-4 mt-12"
      id="experience"
      style={{
        background:
          "radial-gradient(600px at 431px 777px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <div className="border-b text-center my-4">
        <h1 className="text-2xl text-primary">
          <span>3.</span> Work Experience
        </h1>
      </div>
      <ol className="relative border-l border-primary mt-10">
        <li className="mb-10 ml-4">
          <Card className="bg-primary-foreground">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2024 - Present
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Front End Developer at ReelKart, Gurugram
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal ">
                Developed and implemented the dynamic frontend of Reelkart’s platform using Next.js. Leveraged Next.js features for server-side rendering, routing, and optimized performance. Built responsive and interactive user interfaces with React components.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="mb-10 ml-4">
          <Card className="bg-primary-foreground">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2024 - Present
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Front End Developer at Paper Perfect Techno, Remote
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal ">
                Built the frontend of a trading application using React. Integrated interactive graphs and charts for real-time market data visualization. Implemented complex state management for efficient handling of multiple API endpoints. Developed a responsive and user-friendly interface for trading functionalities.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="mb-10 ml-4">
          <Card className="bg-primary-foreground">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Freelance Web Developer, Self Employed
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Freelance Web Developer
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal ">
                Developed a full-stack e-commerce website for a drone company. 
                - Frontend: Built responsive UI using React and Tailwind CSS.
                - Backend: Developed RESTful API using Express.js and Node.js.
                - Created an admin panel for product management (CRUD operations).
                - Technologies used: React, Tailwind CSS, Node.js, Express.js, EmailJS, MongoDB.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="mb-10 ml-4">
          <Card className="bg-primary-foreground">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                AUV ZHCET (Underwater Club)
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal ">
                Designed and developed an animated website using Next.js. Implemented advanced animations using GSAP (GreenSock Animation Platform). Created a responsive design using Tailwind CSS. Technologies used: Next.js, GSAP, Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="ml-4">
          <Card className="bg-primary-foreground">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Google Developer Students Club (GDSC)
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal ">
                Organized and conducted several App and Web development workshops, contributing to the development of student&apos;s skills in creating both web and mobile applications.
              </p>
            </CardContent>
          </Card>
        </li>
      </ol>
    </div>
  );
};

export default WorkExperienceSection;
