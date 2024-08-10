"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";

export function useCreateSong() {
  const queryClient = useQueryClient();

  const createSongMutation = useMutation({
    mutationFn: (newSong: Song): Promise<Song> => axiosInstance.post("/songs", newSong).then(response => response.data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      console.log("Song created successfully", data);
    },
    onError: () => {
      console.log("Error creating song");
    },
  });
  return createSongMutation
}

