"use client";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSong, updateSong } from "../../services/songsApi";

const Song = () => {
  const router = useRouter();
  const params = useParams();
  const queryClient = useQueryClient();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    isPending,
    isError,
    data: hitSong,
    error,
  } = useQuery({
    queryKey: ["songs", id],
    queryFn: () => fetchSong(id as string),
  });

  const updateSongMutation = useMutation({
    mutationFn: updateSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      router.push("/");
    },
  });

  return (
    <>
      <button onClick={() => router.push("/")} className="btn-general">
        Back Song List
      </button>
      <figure style={{ backgroundColor: "#FFCCCB", padding: "1rem" }}>
        <h2>Song: {hitSong?.song}</h2>
        <div>
          <strong>Album:</strong>
          {hitSong?.album}
        </div>
      </figure>
    </>
  );
};

export default Song;
