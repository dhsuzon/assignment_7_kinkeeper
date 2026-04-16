"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuClock,LuMenu, LuX } from "react-icons/lu";
import {FaHome,FaChartLine} from "react-icons/fa"
import navlogo from "../../assets/logo.png"
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome size={18}/> },
    { name: "Timeline", href: "/timeline", icon: <LuClock size={18} /> },
    { name: "Stats", href: "/stats", icon: <FaChartLine size={18}/> },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex items-center gap-2">
            <Image src={navlogo} alt="nav image" loading="eager"/>
          </div>

        
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1  px-4 py-2 text-base font-medium  text-[#64748B]
                    ${isActive ? " rounded-sm bg-[#244D3F] text-white font-semibold " : " "}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#64748B]"
            >
              {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 space-y-2 shadow-lg animate-in slide-in-from-top">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1 px-4 py-3 rounded-lg text-base font-medium text-[#64748B]
                    ${isActive ? " rounded-sm bg-[#244D3F] text-white font-semibold " : " "}`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
