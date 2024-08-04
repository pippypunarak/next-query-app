"use client";

import React from "react";
import SongList from "./song/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center text-2xl font-bold">
          The Taylor Swift Apocalypse
        </div>
        <SongList />
      </div>
    </>
  );
}
