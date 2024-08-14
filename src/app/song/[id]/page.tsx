"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useGetSong } from "@/app/services/song/useGetSong";

const Song = () => {
  const router = useRouter();
  const { id } = useParams();

  const { isLoading, isError, data: hitSong, error } = useGetSong(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950 p-6">
      <div className="flex justify-between items-center mt-10">
        <Image
          alt="backButton"
          src="/chevron-left.svg"
          width={24}
          height={24}
          className="atext-white text-2xl cursor-pointer"
          onClick={() => router.push("/song")}
        />
        <Image
          alt="moreButton"
          src="/more-horizontal.svg"
          width={24}
          height={24}
          className="text-white text-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-start mt-20">
        <Image
          alt="PlaySongImage"
          src="/Rectangle 86.svg"
          width={342}
          height={333}
          className="rounded-2xl w-full max-w-[90%] sm:max-w-[342px] h-auto"
        />
      </div>
      <div className="flex justify-between items-center mt-10 mx-6">
        <figure className="flex flex-col items-start">
          <div className="text-white font-bold text-xl">{hitSong?.song}</div>
          <div className="text-white font-base mt-2">{hitSong?.album}</div>
        </figure>
        <Image
          alt="heartButton"
          src="/heart.svg"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <Image
          alt="progressBar"
          src="/Rectangle 77.svg"
          width={342}
          height={4}
          className="w-full max-w-[342px] h-auto rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center mt-20">
        <Image
          alt="shuffleButton"
          src="/shuffle.svg"
          width={26}
          height={24}
          className="w-6 h-6"
        />
        <Image
          alt="skipBackButton"
          src="/skip-back.svg"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <Image
          alt="pauseButton"
          src="/pause btn.svg"
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <Image
          alt="skipForwardButton"
          src="/skip-forward.svg"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <Image
          alt="repeatButton"
          src="/repeat.svg"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
    </section>
  );
};

export default Song;
