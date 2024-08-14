"use client";

import { v4 as uuidv4 } from "uuid";
import SongForm from "./SongForm";
import { Song } from "../types/song";
import { useCreateSong } from "../services/song/useCreateSong";
import { useRouter } from "next/navigation";

const AddSong = () => {
  const { mutate } = useCreateSong();
  const router = useRouter();

  const handleAddSong = async (song: Omit<Song, "id">) => {
    try {
      mutate({
        id: uuidv4(),
        ...song,
      });
      router.push("/song");
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950 text-white">
      <div className="mt-5 ml-5">
        <button
          className="bg-teal-500 text-white text-sm rounded-md px-5 py-2"
          onClick={() => router.push("/song")}
        >
          Back Song List
        </button>
      </div>
      <div className="text-center text-xl font-semibold mt-10">
        Add New Song
      </div>
      <div className="flex flex-col my-5">
        <SongForm
          onSubmit={handleAddSong}
          initialValue={{ song: "", album: "" }}
        />
      </div>
    </div>
  );
};
export default AddSong;
