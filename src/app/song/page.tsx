"use client";

import { useRouter } from "next/navigation";
import AddSong from "../components/AddSong";
import { useDeleteSong } from "../custom-hooks/mutations";
import { useSongs } from "../custom-hooks/queries";
import { Song } from "../types/song";
import { Row, Col } from "antd";

const SongList = () => {
  const router = useRouter();
  const { isPending, isError, data: songs, error } = useSongs();
  const deleteSongMutation = useDeleteSong();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleDelete = (id: string) => {
    if (id) {
      deleteSongMutation.mutate(id);
    }
  };

  return (
    <section className="flex flex-col items-center w-full px-4 p-4">
      <div className="mb-6 w-full max-w-screen-xl mx-auto">
        <AddSong />
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        <Row gutter={[24, 24]} className="w-full mx-auto ">
          {songs?.map((item: Song) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id} className="h-32">
              <div
                key={item.id}
                className="flex flex-col text-center border border-gray-300 bg-gray-100 p-4 mb-4 rounded-md shadow-lg h-full"
              >
                <div
                  className="song-heading cursor-pointer mb-4 text-md font-semibold hover:text-gray-700"
                  onClick={() => router.push(`/song/${item.id}`)}
                >
                  Song: {item.song}
                </div>
                <div className="flex justify-center gap-4 mt-auto">
                  <button
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                    onClick={() => router.push(`/song/${item.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => {
                      if (item.id) {
                        handleDelete(item.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SongList;
