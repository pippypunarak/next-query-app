import { Col, Row } from "antd";
import React from "react";
import { Song } from "../types/song";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ItemsListProps {
  songList: Song[] | undefined;
}

const ItemsList: React.FC<ItemsListProps> = ({ songList }) => {
  const router = useRouter();

  return (
    <Row gutter={[8, 8]} className="w-full mb-6">
      {songList?.map((item: Song) => (
        <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
          <div className="flex text-white mx-6 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 mt-3">
            <div className="flex-shrink-0">
              <Image
                alt="songFavImage"
                src="https://cdn.pixabay.com/photo/2018/03/20/13/22/sound-3243259_960_720.jpg"
                width={56}
                height={56}
                className="rounded-lg h-[56px] sm:h-[56px] md:h-[56px] lg:h-[60px] xl:h-[64px]"
              />
            </div>
            <div className="ml-4 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 flex-1">
              <div
                className="cursor-pointer text-md sm:text-md md:text-md lg:text-lg xl:text-lg font-bold hover:text-gray-700"
                onClick={() => router.push(`/song/${item.id}`)}
              >
                {item.song}
              </div>
              <div className="mt-1 text-sm sm:text-sm md:text-base lg:text-md xl:text-md font-thin">
                {item.album}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ItemsList;
