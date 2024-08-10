"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";


export function useGetSong(id: string) {
return useQuery({
    queryKey: ["song", id],
    queryFn: () : Promise<Song> => axiosInstance.get(`/songs/${id}`).then(response => response.data),
  });
}