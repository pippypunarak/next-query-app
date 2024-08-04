"use client";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSong, updateSong } from "../../../services/songsApi";
import SongForm from "../../../components/SongForm";
import { Song } from "../../../types/song";
import { Row, Col } from "antd";

const EditSong = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { id } = useParams<{ id: string }>();

  const {
    isLoading,
    isError,
    data: song,
    error,
  } = useQuery({ queryKey: ["songs", id], queryFn: () => fetchSong(id!) });

  const updateSongMutation = useMutation({
    mutationFn: updateSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      router.push("/");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return `Error: ${error.message}`;

  console.log("Fetched Song Data:", song);

  const handleSubmit = (updateSong: Song) => {
    if (id) {
      updateSongMutation.mutate({ id, ...updateSong });
    }
  };

  return (
    <Row gutter={[16, 16]} className="w-full max-w-4xl">
      <Col xs={24} sm={12} md={12} lg={12}>
        <div className="ml-10 mt-10">
          <button
            onClick={() => router.push("/")}
            className="btn-general bg-teal-500 text-white rounded-md px-5 py-2 mb-5"
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
