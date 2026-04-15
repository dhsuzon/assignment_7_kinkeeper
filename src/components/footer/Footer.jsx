import React from "react";
import Image from "next/image";

import Footerlogo from '../../assets /logo-xl.png'
import SocialFacebookIcon from "../../assets /facebook.png";
import SocialInstragramIcon from "../../assets /instagram.png";
import SocialTiwtterIcon from "../../assets /twitter.png"




const Footer = () => {
  return (
    <>
      <div className="bg-[#244D3F] flex flex-col justify-between text-center items-center">
        <div>
          <Image
            src={Footerlogo}
            alt="footer logo"
            loading="eager"
            className="mx-auto mt-20 "
          />
          <p className="mt-4 text-white/80 font-normal text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <h1 className="mt-6 text-xl font-medium text-white">Social Links</h1>
        <div className="flex mt-4 gap-x-3 justify-center items-center">
          <Image
            src={SocialInstragramIcon}
            alt="instagram icon"
            loading="eager"
          />
          <Image src={SocialFacebookIcon} alt="facebook icon" loading="eager" />
          <Image src={SocialTiwtterIcon} alt="Tiwtter icon" loading="eager" />
        </div>
        <p className="w-[62%] border border-t border-t-[#244D3F] mt-8 opacity-20"></p>
      </div>
      
      <div className=" bg-[#244D3F] flex justify-evenly  items-center text-white/50 font-normal text-base  py-7.5 flex-col md:flex-row">
        <div>
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex  justify-center gap-8  items-center mt-2 md:mt-0 ">
          <p>Privacy Policy </p>
          <p>Terms of Service </p>
          <p> Cookies</p>
        </div>
      </div>
    </>
  );
};
                   

export default Footer;
