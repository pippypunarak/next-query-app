"use client";

import React from "react";
import AddSong from "@/app/components/AddSong";
import { useRouter } from "next/navigation";

export default function CreateSong() {
  const router = useRouter();
  return <AddSong />;
}
