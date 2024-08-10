"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"

export function useDeleteSong() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id:string): Promise<void> => axiosInstance.delete(`/songs/${id}`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      console.log("Song deleted successfully");
    },
  });
}

