"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";


export function useGetSongs() {
  return useQuery({
    queryKey: ["songs"],
    queryFn: (): Promise<Song[]> => axiosInstance.get("/songs").then(response => response.data),
  });
}