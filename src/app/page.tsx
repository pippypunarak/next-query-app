"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end items-center mx-auto min-h-screen bg-gradient-to-t from-blue-950 to-pink-500">
      <div className="text-center text-2xl font-bold text-white">
        Feel the beat
      </div>
      <div className="text-center text-white font-thin text-sm mt-6 mb-12">
        Emmerse yourself into the world of music today
      </div>
      <button
        onClick={() => router.push(`/song`)}
        className="text-white bg-gradient-to-r from-purple-600 to-pink-500 w-[203px] h-[48px] rounded-[32px] mb-28"
      >
        Continue
      </button>
    </div>
  );
}
