"use client";

import Link from "next/link";

const NotFound = ()=> {
  return (
    <div className="md:min-h-screen py-10 md:py-0 bg-[#F8FAFC] flex items-center justify-center px-6 font-sans">
      <div className="max-w-md w-full text-center">
       
        <h1 className="text-[120px] font-bold text-[#244D3F] leading-none mb-4">
          404
        </h1>

       
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
          Page Not Found
        </h2>

        <p className="text-[#64748B] text-lg mb-10">
          The page you are looking for does not exist or has been moved. Lets
          get you back on track.
        </p>

        
        <Link
          href="/"
          className="inline-block bg-[#244D3F] text-white text-lg font-medium px-8 py-3 rounded-sm shadow-md hover:bg-[#1a3a30] transition-all duration-300"
        >
          Back to Home
        </Link>

 
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 bg-[#244D3F] rounded-full opacity-20"></div>
          <div className="w-2 h-2 bg-[#244D3F] rounded-full opacity-40"></div>
          <div className="w-2 h-2 bg-[#244D3F] rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
export default NotFound
