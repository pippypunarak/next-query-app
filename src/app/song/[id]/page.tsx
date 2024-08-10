"use client";
import { useParams, useRouter } from "next/navigation";
import { Row, Col } from "antd";
import { useGetSong } from "@/app/services/song/useGetSong";

const Song = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data: hitSong, error } = useGetSong(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Row gutter={[16, 16]} className="w-full max-w-4xl">
        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="ml-10 mt-10">
            <button
              className="bg-teal-500 text-white rounded-md px-5 py-2 mb-5"
              onClick={() => router.push("/song")}
            >
              Back Song List
            </button>
            <figure className="flex flex-col p-10 bg-teal-200 rounded-md">
              <div>
                <strong>Song: </strong>
                {hitSong?.song}
              </div>
              <div>
                <strong>Album: </strong>
                {hitSong?.album}
              </div>
            </figure>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Song;
