"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import { createSong } from "../services/songsApi";
import SongForm from "./SongForm";
import { Song } from "../types/song";

const AddSong = () => {
  const queryClient = useQueryClient();

  const createSongMutation = useMutation({
    mutationFn: createSong,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      console.log("Song created successfully", data);
    },
    onError: () => {
      console.log("Error");
    },
  });

  const handleAddSong = (song: Omit<Song, "id">) => {
    createSongMutation.mutate({
      id: uuidv4(),
      ...song,
    });
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-white rounded-md shadow-lg max-w-3xl">
      <div className="text-center text-2xl font-semibold mb-10">
        Add New Song
      </div>
      <div className="flex justify-center my-5">
        <SongForm
          onSubmit={handleAddSong}
          initialValue={{ song: "", album: "" }}
        />
      </div>
    </div>
  );
};
export default AddSong;
