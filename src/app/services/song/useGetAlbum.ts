"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";


export function useGetAlbum(id: string) {
return useQuery({
    queryKey: ["albums", id],
    queryFn: () : Promise<Song> => axiosInstance.get(`/albums/${id}`).then(response => response.data),
  });
}