import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ItemsListProps {
  src: string;
  alt: string;
}

const HeaderBack: React.FC<ItemsListProps> = ({ src, alt }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mt-10">
      <Image
        alt="backButton"
        src="/chevron-left.svg"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => router.back()}
      />
      <Image
        alt={alt}
        src={src}
        width={24}
        height={24}
        className="cursor-pointer"
      />
    </div>
  );
};

export default HeaderBack;
