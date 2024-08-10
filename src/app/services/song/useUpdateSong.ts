"use client";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../middleware"
import { Song } from "@/app/types/song";

const updateSong = async (updatedSong: Song): Promise<Song> => {
  const response = await axiosInstance.put(`/songs/${updatedSong.id}`, updatedSong);
  return response.data;
};

export function useUpdateSong() {
     const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateSong,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
}
