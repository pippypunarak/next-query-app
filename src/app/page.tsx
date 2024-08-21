"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end items-center min-h-screen bg-gradient-to-t from-blue-950 to-pink-500">
      <div className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
        Feel the beat
      </div>
      <div className="text-center text-white font-thin text-base sm:text-base md:text-md lg:text-lg xl:text-xl mt-6 mb-12">
        Emmerse yourself into the world of music today
      </div>
      <button
        onClick={() => router.push(`/song`)}
        className="text-white bg-gradient-to-r from-purple-600 to-pink-500 w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] h-[44px] md:h-[48px] lg:h-[52px] xl:h-[56px] rounded-[32px] mb-20 md:mb-28 lg:mb-32 xl:mb-40"
      >
        Continue
      </button>
    </div>
  );
}
