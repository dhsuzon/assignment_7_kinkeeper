"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";
import { useTimeline } from "@/context/friendContext"; // কনটেক্সট ইম্পোর্ট



export default function QuickCheckIn({ friendName }) {
  const { addTimelineEntry } = useTimeline(); // ফাংশনটি বের করে আনা

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      title: friendName,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      type: type,
    };

 
    addTimelineEntry(newEntry);

    toast.success(`${type} with ${friendName} added to timeline!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <div className="bg-white p-6 border border-[#E9E9E9] rounded-sm shadow-sm">
      <ToastContainer />

      <h3 className="text-xl font-medium text-[#244D3F] capitalize  mb-6">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-4">

        <button
          onClick={() => handleCheckIn("Call")}
          className="flex flex-col items-center gap-3 py-8 bg-[#F8FAFC] border-none rounded-sm shadow-sm btn h-auto hover:bg-gray-50 transition-all"
        >
          <div className="text-xl text-gray-400">
            <FaPhoneAlt />
          </div>
          <span className="text-lg font-normal text-[#1F2937] capitalize">
            Call
          </span>
        </button>

        <button
          onClick={() => handleCheckIn("Text")}
          className="flex flex-col items-center gap-3 py-8 bg-[#F8FAFC] border-none rounded-sm shadow-sm btn h-auto hover:bg-gray-50 transition-all"
        >
          <div className="text-xl text-gray-400">
            <FaCommentDots />
          </div>
          <span className="text-lg font-normal text-[#1F2937] capitalize">
            Text
          </span>
        </button>

        <button
          onClick={() => handleCheckIn("Video")}
          className="flex flex-col items-center gap-3 py-8 bg-[#F8FAFC] border-none rounded-sm shadow-sm btn h-auto hover:bg-gray-50 transition-all"
        >
          <div className="text-xl text-gray-400">
            <FaVideo />
          </div>
          <span className="text-lg font-normal text-[#1F2937] capitalize">
            Video
          </span>
        </button>
      </div>
    </div>
  );
}
