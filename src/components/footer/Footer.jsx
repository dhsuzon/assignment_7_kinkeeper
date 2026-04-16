import React from "react";
import Image from "next/image";

import Footerlogo from "@/assets/logo-xl.png";
import SocialFacebookIcon from "@/assets/facebook.png";
import SocialInstragramIcon from "@/assets/instagram.png";
import SocialTiwtterIcon from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#244D3F] flex flex-col justify-center text-center items-center px-6">
        <div>
          <Image
            src={Footerlogo}
            alt="footer logo"
            loading="eager"
            className="mx-auto mt-16 md:mt-20"
          />
          <p className="mt-4 text-white/80 font-normal text-sm md:text-base max-w-7xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <h1 className="mt-6 text-lg md:text-xl font-medium text-white">
          Social Links
        </h1>

        <div className="flex mt-4 gap-x-3 justify-center items-center">
          <Image
            src={SocialInstragramIcon}
            alt="instagram icon"
            loading="eager"
            className="w-8 h-8 md:w-10 md:h-10"
            width={32}
            height={32}
          />
          <Image
            src={SocialFacebookIcon}
            alt="facebook icon"
            loading="eager"
            className="w-8 h-8 md:w-10 md:h-10"
            width={32}
            height={32}
          />
          <Image
            src={SocialTiwtterIcon}
            alt="Tiwtter icon"
            loading="eager"
            className="w-8 h-8 md:w-10 md:h-10"
            width={32}
            height={32}
          />
        </div>

        <p className="container border-t border-white/20 mt-8"></p>
      </div>

      <div className="bg-[#244D3F] flex flex-col md:flex-row justify-center md:justify-evenly items-center text-white/50 font-normal text-xs md:text-base py-7 md:py-8 px-6 gap-y-4">
        <div className="text-center">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-4 md:gap-8 items-center">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
