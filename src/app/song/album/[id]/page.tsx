"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetAlbum } from "@/app/services/song/useGetAlbum";
import HeaderBack from "@/app/components/HeaderBack";
import ItemsList from "@/app/components/ItemsList";
import { useGetSongs } from "@/app/services/song/useGetSongs";

const Album = () => {
  const { id } = useParams();

  const {
    isLoading: isLoadingAlbum,
    isError: isErrorAlbum,
    data: hitSong,
    error,
  } = useGetAlbum(id as string);
  const {
    isLoading: isLoadingSongs,
    isError: isErrorSongs,
    data: songList,
  } = useGetSongs();

  if (isLoadingSongs || isLoadingAlbum) return <div>Loading...</div>;
  if (isErrorSongs || isErrorAlbum) return <div>Error: {error?.message}</div>;

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950">
      <div
        className="relative w-full h-[343px] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] flex flex-col justify-between p-6 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-cover bg-center rounded-b-3xl"
        style={{
          backgroundImage: 'url("/Rectangle 87.svg")',
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeaderBack src="/more-horizontal.svg" alt="moreButton" />
        <div className="flex justify-between items-center">
          <figure className="flex flex-col text-white">
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
              {hitSong?.albums}
            </div>
            <div className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              {hitSong?.artist}
            </div>
          </figure>
          <div className="flex items-center space-x-4">
            <Image alt="heartButton" src="/heart.svg" width={24} height={24} />
            <Image
              alt="playButton"
              src="/play btn.svg"
              width={56}
              height={56}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ItemsList songList={songList} />
      </div>
    </section>
  );
};

export default Album;
