"use client";
import { useParams, useRouter } from "next/navigation";
import SongForm from "../../../components/SongForm";
import { Song } from "../../../types/song";
import { Row, Col } from "antd";
import { useGetSong } from "@/app/services/song/useGetSong";
import { useUpdateSong } from "@/app/services/song/useUpdateSong";

const EditSong = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data: song, error } = useGetSong(id as string);

  const updateSongMutation = useUpdateSong();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return `Error: ${error.message}`;

  console.log("Fetched Song Data:", song);

  const handleSubmit = (updatedSong: Song) => {
    if (id) {
      updateSongMutation.mutate({ id, ...updatedSong });
    }
    router.push("/");
  };

  return (
    <Row gutter={[16, 16]} className="w-full max-w-4xl">
      <Col xs={24} sm={12} md={12} lg={12}>
        <div className="ml-10 mt-10">
          <button
            onClick={() => router.push("/")}
            className="bg-teal-500 text-white rounded-md px-5 py-2 mb-5"
          >
            Back Song List
          </button>
          {song && <SongForm onSubmit={handleSubmit} initialValue={song} />}
        </div>
      </Col>
    </Row>
  );
};

export default EditSong;
