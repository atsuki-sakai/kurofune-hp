import Image from "next/image";
import Marquee from "react-fast-marquee";

const imagePaths = [
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
  "https://via.placeholder.com/320x120",
];

export default async function MarqueeSection() {
  return (
    <div className="w-full h-full  relative">
      <div className="overflow-hidden whitespace-nowrap my-8">
        <Marquee speed={30}>
          {imagePaths.map((imagePath, index) => (
            <div
              key={index + "-" + imagePath.slice(0, 5)}
              className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4"
            >
              <Image
                className="w-full h-auto object-cover"
                src={imagePath}
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
