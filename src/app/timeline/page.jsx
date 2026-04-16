"use client";

import { useTimeline } from "@/context/friendContext";
import Image from "next/image";
import { useState } from "react"; 

import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";

export default function TimelinePage() {
  const { timeline } = useTimeline();
  const [filterType, setFilterType] = useState("All"); 

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return callIcon;
      case "Text":
        return textIcon;
      case "Video":
        return videoIcon;
      default:
        return "";
    }
  };


  const filteredTimeline = timeline.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20 px-4 md:px-10 font-sans">
      <div className="w-full max-w-200 mx-auto">
        <div className="mb-8 md:mb-12 text-left">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] mb-4">
            Timeline
          </h2>

          <div className="relative w-full sm:w-45">
        
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full border border-[#E9E9E9] text-[#64748B] text-base font-normal px-4 py-2.5 rounded-md bg-white outline-none appearance-none cursor-pointer"
            >
              <option value="All">Filter Timeline</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6">
        
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 md:gap-6 p-4 bg-white border border-[#E9E9E9] rounded-sm shadow-sm"
              >
                <div className="shrink-0 rounded-full flex items-center justify-center">
                  <Image
                    src={getIcon(item.type)}
                    alt={item.type}
                    className="object-contain md:w-7 md:h-7 border-none"
                  />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-lg font-normal text-[#64748B]">
                    <span className="text-xl font-medium text-[#1F2937]">
                      {item.type}
                    </span>{" "}
                    {item.title}
                  </h4>
                  <p className="text-base font-medium text-[#64748B]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white border border-dashed border-[#E9E9E9] rounded-sm">
              <p className="text-[#64748B]">
                {filterType === "All"
                  ? "No activity recorded yet."
                  : `No ${filterType} records found.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
