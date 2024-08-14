"use client";
import { useParams, useRouter } from "next/navigation";
import { Row, Col } from "antd";
import Image from "next/image";
import { useGetSongs } from "@/app/services/song/useGetSongs";
import { useGetAlbum } from "@/app/services/song/useGetAlbum";

const Album = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: hitSong,
    error,
  } = useGetAlbum(id as string);
  const { data: songs } = useGetSongs();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950">
      <div
        className="relative w-full h-[343px] sm:h-[60vh] md:h-[70vh] flex flex-col justify-between p-6 bg-cover bg-center rounded-b-3xl"
        style={{ backgroundImage: 'url("/Rectangle 87.svg")' }}
      >
        <div className="flex justify-between items-center">
          <Image
            alt="backButton"
            src="/chevron-left.svg"
            width={24}
            height={24}
            className="text-white text-2xl cursor-pointer"
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

        <div className="flex justify-between items-center">
          <figure className="flex flex-col text-white">
            <div className="text-2xl font-bold mb-2">{hitSong?.albums}</div>
            <div className="text-md font-base">{hitSong?.artist}</div>
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
      <Row gutter={[8, 8]} className="w-full mt-6 mb-6">
        {songs?.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <div className="flex text-white mx-6 mt-3">
              <div className="flex-shrink-0">
                <Image
                  alt="songFavImage"
                  src="https://cdn.pixabay.com/photo/2018/03/20/13/22/sound-3243259_960_720.jpg"
                  width={56}
                  height={56}
                  className="rounded-lg h-[56px]"
                />
              </div>
              <div className="ml-4 flex-1">
                <div
                  className="cursor-pointer text-md font-bold hover:text-gray-700"
                  onClick={() => router.push(`/song/${item.id}`)}
                >
                  {item.song}
                </div>
                <div className="mt-1 text-sm font-thin">{item.album}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Album;
