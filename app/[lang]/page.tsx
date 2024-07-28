import Image from "next/image";
import { useTranslation } from "../i18n";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "../../components/common/ResponsiveImage";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");

  const desktopImage = "/assets/images/akusyu-pc.png";
  const spImage = "/assets/images/akusyu-sp.png";

  return (
    <>
      <div className="relative w-full h-full bg-gradient-to-b from-[#96ebf1] to-[#048451]  dark:bg-gradient-to-b dark:from-[#03311f] dark:to-[#3b5e60]">
        <div className="flex justify-center items-center blur-sm">
          <ResponsiveImage
            spImage={spImage}
            pcImage={desktopImage}
            alt="Top Image"
            maxHeight={700}
            responsiveSize={{
              sp: { width: 500, height: 700 },
              pc: { width: 1920, height: 1080 },
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute bottom-0 left-0 p-4 md:p-6 bg-white/30 dark:bg-black/30 w-full md:w-1/2 md:ml-10 md:mb-12 md:rounded-lg md:shadow-lg">
            <h3 className="text-2xl  tracking-widest text-black dark:text-white">
              <strong className="text-5xl md:text-6xl">想い</strong>を
              <strong className="text-5xl md:text-6xl">採用</strong>の
              <span className="block md:inline">武器にする</span>
            </h3>
            <p className="text-xs md:text-sm tracking-wide text-slate-700 dark:text-gray-400 mt-3">
              Wantedlyは、あなたの会社が掲げる｢想い｣への共感を通じて、
              条件だけでは動かない優秀な人材にアプローチ。
              条件や知名度、採用予算に左右されない採用を実現します。
            </p>
            <div className="flex justify-around mt-4 gap-10">
              <Button className="w-full">資料を請求する</Button>
              <Button className="w-full" variant="outline">
                料金表を見る
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <Marquee speed={30}>
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
          <Image
            className="py-1 px-2"
            src="https://via.placeholder.com/320x120"
            alt="Brand"
            width={120}
            height={40}
          />
        </Marquee>
      </div>
    </>
  );
}
