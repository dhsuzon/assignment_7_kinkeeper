"use client";

import { useTimeline } from "@/context/friendContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StatsPage() {
  const { timeline } = useTimeline();
  const [isMounted, setIsMounted] = useState(false);

  // ব্রাউজারে মাউন্ট হওয়া পর্যন্ত অপেক্ষা করা (Hydration error এবং Chart error এড়াতে)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const statsData = [
    {
      name: "Call",
      value: timeline?.filter((item) => item.type === "Call").length || 0,
    },
    {
      name: "Text",
      value: timeline?.filter((item) => item.type === "Text").length || 0,
    },
    {
      name: "Video",
      value: timeline?.filter((item) => item.type === "Video").length || 0,
    },
  ];

  const hasData = statsData.some((item) => item.value > 0);
  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

  if (!isMounted) return null; 

  return (
    <div className="bg-[#F8FAFC] py-16 px-4 font-sans">
      <div className="max-w-200 lg:ml-61.5 w-full">
        <h2 className="text-[36px] md:text-[40px] font-bold text-[#1F2937] mb-12 text-left">
          Friendship Analytics
        </h2>

        <div className="bg-white border border-[#E9E9E9] rounded-sm p-6 md:p-10 shadow-sm w-full">
          <h3 className="text-xl font-medium text-[#244D3F] mb-8 text-left">
            By Interaction Type
          </h3>

     
          <div className="w-full flex justify-center items-center min-h-87.5">
            {hasData ? (
             
              <PieChart width={350} height={350}>
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-medium text-[#1F2937] mb-2">
                  No activity recorded yet!
                </p>
                <p className="text-[#64748B] mb-6 px-4">
                  Check-in with your friends to see your analytics here.
                </p>
                <Link
                  href="/"
                  className="px-6 py-2 bg-[#244D3F] text-white rounded-md hover:bg-[#1a3a30] transition-all"
                >
                  View Friends List
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
