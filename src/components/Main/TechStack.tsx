"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  BiLogoBaidu,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { SiCplusplus,SiNodedotjs, SiExpress,SiDigitalocean } from "react-icons/si";
import {  TbBrandNextjs } from "react-icons/tb";
import { SiPostman, SiRailway, SiRender, SiVercel } from "react-icons/si";
import { useSound } from "@/Hooks/Sound/useSound";
const TechStack = () => {
  const { soundEnabled } = useSound();
  const AudioSrc = "/Audio/tap.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) {
      audio.play();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-4 mt-12" id="stack">
      <div className="border-b text-center my-8">
        <h1 className="text-2xl text-primary">
          <span>2.</span> Tech Stack
        </h1>
      </div>
      <div className="flex flex-col gap-y-4 mt-8">
        <Card className="bg-primary-foreground">
          <CardHeader>
            <CardTitle className="text-xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            <Badge
              className="z-10 text-white"
              onMouseEnter={() => AudioPlayer(AudioSrc)}
            >
              <BiLogoJavascript size={25} />
              <span className="pl-2">JavaScript</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoTypescript size={25} />
              <span className="pl-2">Typescript</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiCplusplus size={25} />
              <span className="pl-2">C++</span>
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-primary-foreground">
          <CardHeader>
            <CardTitle className="text-xl">Frameworks/Libraries</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoReact size={25} />
              <span className="pl-2">React.js</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <TbBrandNextjs size={25} />
              <span className="pl-2">Next.js</span>
            </Badge>
           
            
            
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoTailwindCss size={25} />
              <span className="pl-2">Tailwind CSS</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoBaidu size={25} />
              <span className="pl-2">SchadCn UI</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiExpress size={25} />
              <span className="pl-2">Express.js</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiNodedotjs size={25} />
              <span className="pl-2">Node.js</span>
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-primary-foreground">
          <CardHeader>
            <CardTitle className="text-xl">Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoVisualStudio size={25} />
              <span className="pl-2">VS Code</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoGithub size={25} />
              <span className="pl-2">GitHub</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiPostman size={25} />
              <span className="pl-2">Postman</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoMongodb size={25} />
              <span className="pl-2">MongoDB</span>
            </Badge>
          </CardContent>
        </Card>
        <Card className="bg-primary-foreground">
          <CardHeader>
            <CardTitle className="text-xl">Hosting</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiVercel size={25} />
              <span className="pl-2">Vercel</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <BiLogoNetlify size={25} />
              <span className="pl-2">Netlify</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiRailway size={25} />
              <span className="pl-2">Bluehost.in</span>
            </Badge>
            <Badge
              onMouseEnter={() => AudioPlayer(AudioSrc)}
              className="text-white z-10"
            >
              <SiDigitalocean size={25} />
              <span className="pl-2">DigitalOcean</span>
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechStack;
