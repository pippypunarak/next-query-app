"use client";

import { useRouter } from "next/navigation";
import { Song } from "../types/song";
import { useDeleteSong } from "../services/song/useDeleteSong";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useGetAlbums } from "../services/song/useGetAlbums";
import ItemsList from "../components/ItemsList";
import { useGetSongs } from "../services/song/useGetSongs";

const SongList = () => {
  const router = useRouter();
  const {
    isLoading: isLoadingAlbums,
    isError: isErrorAlbums,
    data: albums,
    error,
  } = useGetAlbums();
  const {
    isLoading: isLoadingSongs,
    isError: isErrorSongs,
    data: songList,
  } = useGetSongs();

  if (isLoadingSongs || isLoadingAlbums) return <div>Loading...</div>;
  if (isErrorSongs || isErrorAlbums) return <div>Error: {error?.message}</div>;

  // const deleteSongMutation = useDeleteSong();

  // const handleDelete = (id: string) => {
  //   if (id) {
  //     deleteSongMutation.mutate(id);
  //   }
  // };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950">
      <div className="ml-6 mt-14 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-14 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-white">
        Welcome back!
      </div>
      <div className="ml-6 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-14 text-white font-thin text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 mb-2">
        What do you feel like today?
      </div>
      <div className="flex flex-col items-center mt-6">
        <button
          onClick={() => router.push(`/song/addsong`)}
          className="text-white font-base bg-gradient-to-r from-purple-600 to-pink-500 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] xl:h-[56px] rounded-[32px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
        >
          Add your song
        </button>
      </div>
      <Navbar />
      <div className="overflow-x-auto whitespace-nowrap ml-6 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-14">
        <div className="inline-flex space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
          {albums?.map((item: Song) => (
            <div key={item.id} className="snap-start flex-shrink-0">
              <div className="flex flex-col items-start text-white">
                <Image
                  alt="songImage"
                  src="/Rectangle 90.svg"
                  width={208}
                  height={202}
                  className="rounded-lg h-[202px] md:h-[202px] lg:h-[240px] xl:h-[260px] cursor-pointer"
                  onClick={() => router.push(`/song/album/${item.id}`)}
                />
                <div
                  onClick={() => router.push(`/song/album/${item.id}`)}
                  className="mt-4 sm:mt-4 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl font-bold cursor-pointer"
                >
                  {item.albums}
                </div>
                <div className="mt-1 sm:text-sm md:text-base lg:text-md xl:text-md font-thin">
                  {item.artist}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white font-medium text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 ml-6 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-14 mb-4">
        Your favourites
      </div>
      <ItemsList songList={songList} />
    </section>
  );
};

export default SongList;
