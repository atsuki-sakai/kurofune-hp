import Image from "next/image";
import Marquee from "react-fast-marquee";

const imagePaths = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/assets/images/5.jpg",
  "/assets/images/6.jpg",
  "/assets/images/7.jpg",
  "/assets/images/8.jpg",
];

export default async function MarqueeSection() {
  return (
    <div className="w-full h-full  relative">
      <div className="overflow-hidden whitespace-nowrap my-8">
        <Marquee speed={30}>
          {imagePaths.map((imagePath, index) => (
            <div
              key={index + "-" + imagePath.slice(0, 5)}
              className="w-[100px] md:w-[280px] h-auto mx-2 md:mx-4 rounded-xl overflow-hidden"
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
