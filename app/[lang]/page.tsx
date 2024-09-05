import Image from "next/image";
import { useTranslation } from "../i18n";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import RowSection from "@/components/common/RowSection";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");

  // jpgでないとデプロイした際に表示されない。
  const desktopImage = "/assets/images/akusyu-pc.jpg";
  const spImage = "/assets/images/akusyu-sp.jpg";
  return (
    <>
      {/* TopContent */}
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
            <div className="flex justify-center items-center w-full">
              <div className="w-full md:flex justify-around mt-4 gap-10">
                <Button className="w-full">資料を請求する</Button>
                <Button className="w-full mt-4 md:mt-0" variant="outline">
                  料金表を見る
                </Button>
              </div>
              <div className="w-fit p-2 mt-4 border-l ml-4">
                <span className="writing-mode-vertical-rl tracking-[3px] font-extralight text-[10px] flex justify-center items-center animate-smoothScroll">
                  SCROLL →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Menu */}
      <div className="relative min-h-[150px] md:min-h-[250px] overflow-hidden my-12 mx-5 rounded-md shadow-md">
        <div className="absolute top-0 left-0 w-full ">
          <Image
            src={"/assets/images/whats-96fune.jpg"}
            className="object-cover w-full h-auto blur-[1px] "
            width={1920}
            height={1080}
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 w-full h-full z-10 ">
          <div className="flex justify-center items-center h-full w-full">
            <p className="text-white tracking-widest font-bold text-lg">
              なぜKUROFUNEが良いのか？
            </p>
          </div>
        </div>
      </div>
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap my-3">
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
      {/* Service Content - 1 */}
      <div className="bg-gray-100">
        <div className="relative w-full py-8  max-w-[1200px] m-auto md:flex md:justify-center md:items-center md:gap-5 md:p-5">
          <div className="md:w-[50%]">
            <Image
              src={"https://via.placeholder.com/1920x1080"}
              width={1920}
              height={1080}
              alt="test image"
            />
          </div>
          <div className="p-3 my-5 tracking-wider md:w-[50%]">
            <h4 className="font-bold text-3xl">
              400万人の優秀層が
              <br />
              ｢想い｣で通じあえる
              <br />
              会社を待っています。
            </h4>
            <p className="mt-5  text-sm">
              Wantedlyには価値観を軸にシゴトを探すユーザーが幅広い職種から集まっています。仕事のやりがいや、事業の社会的意義の発信を通じて、自社に本当にマッチする人材を採用しましょう。
            </p>
          </div>
        </div>
      </div>

      {/* Service Content - 2 */}
      <div className="relative pt-6">
        <div className="text-center mb-10">
          <h4 className="text-3xl font-extrabold">
            会社の「想い」が、
            <br />
            見える、伝わる。
          </h4>
          <p>
            あなたの会社だけの魅力を伝える
            <br />
            豊富な手段が揃っています。
          </p>
        </div>
        <RowSection
          heading="掲載し放題の募集で"
          desc="中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。"
          bgText="Hello World World"
          btnLabel="募集を開始"
          imgSrc="https://via.placeholder.com/1920x1080"
          subText="新卒・インターン / 中途・副業採用 / 全職種対応"
          flexReverse={true}
        />
        <RowSection
          heading="掲載し放題の募集で"
          desc="中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。"
          bgText="Hello World World"
          btnLabel="募集を開始"
          imgSrc="https://via.placeholder.com/1920x1080"
          subText="新卒・インターン / 中途・副業採用 / 全職種対応"
          flexReverse={false}
        />
        <RowSection
          heading="掲載し放題の募集で"
          desc="中途からインターンまで、公開本数の限りなくあらゆる職種で応募を集めることができます。誰でも簡単に会社の想いを伝えることができるフォーマットを提供しています。"
          bgText="Hello World"
          btnLabel="募集を開始"
          imgSrc="https://via.placeholder.com/1920x1080"
          subText="新卒・インターン / 中途・副業採用 / 全職種対応"
          flexReverse={true}
        />
      </div>
      {/* Service Card */}
      <div className="relative pt-6 pb-14 px-5 w-full max-w-[1200px] m-auto">
        <div className="w-full bg-blue-400 py-6  px-3 rounded-xl shadow-md text-white md:flex md:justify-around md:items-center">
          <div className="md:w-[60%]">
            <h3 className="text-2xl md:text-4xl font-bold mb-5 leading-loose">
              成果報酬なし。
              <br /> 採用コストを抑えられます。
            </h3>
            <p className="my-6 font-light leading-loose">
              Wantedlyは、運用の工夫で採用単価が抑えられ、使えば使うほどお客様に採用効果を感じていただけるよう、成果報酬のかからない毎月定額の料金モデルを採用しています。
            </p>
          </div>
          <div className="md:w-[30%]">
            <Button
              variant={"outline"}
              className="bg-transparent w-full rounded-full md:bg-white md:text-gray-500 font-bold tracking-wider"
            >
              料金表を見る
            </Button>
          </div>
        </div>
      </div>
      {/* Service Menu */}
      <div className="relative -z-20 bg-gray-50 py-12">
        <div className="w-full max-w-pagewidth m-auto p-5">
          <div className="relative w-full h-auto">
            <div className="absolute top-12 md:top-3 left-0 right-0 -z-10">
              <p className="text-center text-7xl md:text-9xl md:scale-150 font-bold text-blue-100">
                OPTIONS
              </p>
            </div>
            <h4 className="text-center font-bold text-3xl md:text-5xl">
              採用ニーズに合わせて カスタマイズ。
            </h4>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-14 md:mt-40">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex"></div>
              <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
                hello world
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex"></div>
              <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
                hello world
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex"></div>
              <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
                hello world
              </span>
            </div>
            <div className="w-full flex justify-evenly items-center  col-span-3">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex "></div>
                <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
                  hello world
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex "></div>
                <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
                  hello world
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center pt-3 my-8">
            <Button
              variant={"outline"}
              className="font-bold text-gray-500 bg-transparent rounded-full py-2 px-5 md:px-12"
            >
              オプションについて詳しく
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
