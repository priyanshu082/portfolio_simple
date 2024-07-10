"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { MdEngineering } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import Link from "next/link";
import { useSound } from "@/Hooks/Sound/useSound";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
const AboutSection = () => {
  const { soundEnabled } = useSound();
  const ClickSrc = "/Audio/click.mp3";
  const HoverSrc = "/Audio/tap.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    <div
      className="w-full min-h-screen px-4 flex flex-col justify-center mt-12 "
      id="about"
    >
      <div className="border-b text-center">
        <h1 className="text-2xl text-primary">
          <span>1.</span> About Me
        </h1>
      </div>
      <div className="mt-8 p-8 bg-primary-foreground border rounded-2xl">
        <div className="flex flex-col gap-y-2 text-w">
          <span className="text-primary text-xl">Priyanshu Singh</span>
          <div className="flex gap-x-2 flex-wrap">
            <Link
              href={"https://twitter.com/_Harsh_raghav_"}
              className="z-10 flex gap-x-2 items-center"
              onClick={() => AudioPlayer(ClickSrc)}
              target="_blank"
            >
              <TwitterLogoIcon /> @priyansh9874561
            </Link>
            <span className="text-primary">|</span>
          CSE <span className="text-primary">|</span> ZHCET,AMU{" "}
            <span className="text-primary">|</span> Aligarh
          </div>
          <div className="w-full flex gap-x-2">
            <Badge
              className="text-white flex gap-x-2 z-10"
              onMouseEnter={() => AudioPlayer(HoverSrc)}
            >
              <MdEngineering size={20} />
              Software Engineer
            </Badge>
            <Badge
              className="text-white flex gap-x-2 z-10"
              onMouseEnter={() => AudioPlayer(HoverSrc)}
            >
              <PiStudentBold size={20} />
              Student
            </Badge>
          </div>
        </div>
        <div className="mt-3">
          <br />
          <p>
            Greetings, I am{" "}
            <span className="text-black dark:text-white">
              Priyanshu Singh
            </span>
            , a dedicated Software Engineer from Aligarh, India, with a relentless
            passion for innovation and technological advancement. Currently
            pursuing a Bachelor&apos;s degree in Computer Science Engineering from
            Zakir Husain College of Engineering and Technology , I have maintained an impressive GPA of
            8.026.
          </p>
          <br />
          <p>
            My tech journey commenced in Feb 2024, joining{" "}
            <span className="text-black dark:text-white">
              Paper Perfect Techno. 
            </span>
             At Perfect Techno, I played a key role in enhancing the trading app's front-end. My primary focus was on building and refining the user interface for the trading application, ensuring it was responsive, intuitive, and aligned with modern design principles. This work contributed to a more robust and user-friendly trading platform for the company's clients. Additionally, I fixed several minor issues to improve the user experience and overall functionality.
          </p>
          <br />
          <p>
  At <span className="text-black dark:text-white">Reelkart</span>, I am currently engaged in an ongoing internship where I focus on front-end development. My primary responsibility has been building a dynamic landing page with an engaging and responsive user interface. I am utilizing modern web technologies to create a visually appealing design that adapts seamlessly across various devices and screen sizes. This project aims to enhance the company's online presence and improve user engagement with the platform.
</p>
         
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
