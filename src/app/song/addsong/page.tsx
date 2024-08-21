"use client";

import SongForm from "@/app/components/SongForm";
import { useCreateSong } from "@/app/services/song/useCreateSong";
import { Song } from "@/app/types/song";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

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
      <div className="mt-5 ml-5 sm:ml-5 md:ml-6 lg:ml-8 xl:ml-10">
        <button
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-md px-4 sm:px-5 py-2"
          onClick={() => router.back()}
        >
          Back Song List
        </button>
      </div>
      <div className="text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-10 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
        Add New Song
      </div>
      <div className="flex flex-col my-5 sm:my-6 md:my-7 lg:my-8 xl:my-10">
        <SongForm
          onSubmit={handleAddSong}
          initialValue={{ song: "", album: "" }}
        />
      </div>
    </div>
  );
};
export default AddSong;
