import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center items-center header__blur mt-8 px-4 ">
      <div className="flex gap-x-4 my-3">
        <Link
          href={"https://x.com/priyansh9874561"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
        >
          <TwitterLogoIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/priyanshu-singh-a81975253/"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
        >
          <LinkedInLogoIcon />
        </Link>
        <Link
          href={"mailto:priyanshusingh216@gmail.com"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
        >
          <BiMailSend />
        </Link>
      </div>
      <p className="text-sm text-center">
        <span>Designed & Built by Priyanshu Singh </span>
        <br />
        <span>© 2024</span> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
