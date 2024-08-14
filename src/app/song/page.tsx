"use client";

import { useRouter } from "next/navigation";
import { Song } from "../types/song";
import { Row, Col } from "antd";
import { useGetSongs } from "../services/song/useGetSongs";
import { useDeleteSong } from "../services/song/useDeleteSong";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useGetAlbums } from "../services/song/useGetAlbums";

const SongList = () => {
  const router = useRouter();
  const { isLoading, isError, data: songs, error } = useGetSongs();
  const { data: albums } = useGetAlbums();

  // const deleteSongMutation = useDeleteSong();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // const handleDelete = (id: string) => {
  //   if (id) {
  //     deleteSongMutation.mutate(id);
  //   }
  // };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-t from-purple-700 to-slate-950">
      <div className="ml-6 mt-14 text-2xl font-semibold text-white">
        Welcome back!
      </div>
      <div className="ml-6 text-white font-thin text-sm mt-2 mb-2">
        What do you feel like today?
      </div>
      <div className="flex flex-col items-center mt-6">
        <button
          onClick={() => router.push(`/song/addsong`)}
          className="text-white font-base bg-gradient-to-r from-purple-600 to-pink-500 w-[220px] h-[48px] rounded-[32px] mb-6"
        >
          Add your favourite song
        </button>
      </div>
      <Navbar />
      <div className="overflow-x-auto whitespace-nowrap ml-6">
        <div className="inline-flex space-x-4">
          {albums?.map((item: Song) => (
            <div key={item.id} className="snap-start flex-shrink-0">
              <div className="flex flex-col items-start text-white">
                <Image
                  alt="songImage"
                  src="/Rectangle 90.svg"
                  width={208}
                  height={202}
                  className="rounded-lg h-[202px]"
                />
                <div
                  onClick={() => router.push(`/song/album/${item.id}`)}
                  className="mt-4 text-md font-bold"
                >
                  {item.albums}
                </div>
                <div className="mt-1 text-sm font-thin">{item.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white font-medium text-lg mt-10 ml-6 mb-4">
        Your favourites
      </div>
      <Row gutter={[8, 8]} className="w-full mb-6">
        {songs?.map((item: Song) => (
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

export default SongList;
