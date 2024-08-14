"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";


export function useGetAlbums() {
  return useQuery({
    queryKey: ["albums"],
    queryFn: (): Promise<Song[]> => axiosInstance.get("/albums").then(response => response.data),
  });
}