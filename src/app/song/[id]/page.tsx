"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetSong } from "@/app/services/song/useGetSong";
import HeaderBack from "@/app/components/HeaderBack";

const Song = () => {
  const { id } = useParams();

  const {
    isLoading: isLoadingSong,
    isError: isErrorSong,
    data: hitSong,
    error,
  } = useGetSong(id as string);

  if (isLoadingSong) return <div>Loading...</div>;
  if (isErrorSong) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950 p-6 sm:p-6 md:p-6 lg:p-8 xl:p-8">
      <HeaderBack src="/more-horizontal.svg" alt="moreButton" />
      <div className="flex flex-col items-center justify-start mt-16 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-20">
        <Image
          alt="PlaySongImage"
          src="/Rectangle 86.svg"
          width={342}
          height={333}
          className="rounded-2xl w-full max-w-[90%] sm:min-w-[342px] h-auto"
        />
      </div>
      <div className="flex justify-between items-center mt-10 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 mx-6 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        <figure className="flex flex-col items-start">
          <div className="text-white font-bold text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
            {hitSong?.song}
          </div>
          <div className="text-white font-base sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
            {hitSong?.album}
          </div>
        </figure>
        <Image alt="heartButton" src="/heart.svg" width={24} height={24} />
      </div>
      <div className="flex flex-col items-center mt-10 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16">
        <Image
          alt="progressBar"
          src="/Rectangle 77.svg"
          width={342}
          height={4}
          className="w-full sm:min-w-[342px] md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] h-auto rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center mt-16 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-20 mx-3 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-10">
        <Image alt="shuffleButton" src="/shuffle.svg" width={26} height={24} />
        <Image
          alt="skipBackButton"
          src="/skip-back.svg"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image alt="pauseButton" src="/pause btn.svg" width={64} height={64} />
        <Image
          alt="skipForwardButton"
          src="/skip-forward.svg"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          alt="repeatButton"
          src="/repeat.svg"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Song;
