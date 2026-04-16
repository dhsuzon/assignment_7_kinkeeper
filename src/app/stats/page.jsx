"use client";

import { useTimeline } from "@/context/friendContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function StatsPage() {
  const { timeline } = useTimeline();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const statsData = useMemo(() => {
    if (!timeline) return [];
    return [
      { name: "Call", value: timeline.filter((item) => item.type === "Call").length },
      { name: "Text", value: timeline.filter((item) => item.type === "Text").length },
      { name: "Video", value: timeline.filter((item) => item.type === "Video").length },
    ];
  }, [timeline]);

  const hasData = useMemo(() => statsData.some((item) => item.value > 0), [statsData]);
  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

  if (!isMounted) {
    return <div className="bg-[#F8FAFC] flex-1"></div>;
  }

  return (
   
    <div className="bg-[#F8FAFC] flex-1 py-10 md:py-16 px-4 w-full overflow-hidden">
   
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] mb-8 md:mb-12">
          Friendship Analytics
        </h2>

        <div className="bg-white border border-[#E9E9E9] rounded-sm p-6 md:p-10 shadow-sm w-full">
          <h3 className="text-xl font-medium text-[#244D3F] mb-8">
            By Interaction Type
          </h3>

          <div className="w-full flex justify-center items-center min-h-[350px] md:min-h-[400px]">
            {hasData ? (
              <PieChart width={300} height={350}> 
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  animationDuration={800}
                >
                  {statsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip isAnimationActive={false} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10">
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