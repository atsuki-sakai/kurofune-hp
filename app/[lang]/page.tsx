import React from "react";
import Image from "next/image";
import { useTranslation } from "../i18n";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import RowSection from "@/components/common/RowSection";
import { Animation } from "@/components/Animation";
import ParallaxHeader from "@/components/common/ParallaxHeader";
import FeatureSection from "@/components/common/FeatureSection";
import CtaSection from "@/components/common/CtaSection";
import GridTile from "@/components/common/GridTile";
import PricingSection from "@/components/common/PricingSection";
import TimeLine from "@/components/common/TimeLine";
import MemberGrid from "@/components/common/MemberGrid";
import BlogSection from "@/components/common/BlogSection";
import NewsSection from "@/components/common/NewsSection";
import Testmonial from "@/components/common/Testmonial";
import ContentSection from "@/components/common/ContentSection";
import LogoCloud from "@/components/common/LogoCloud";
import Faqs from "@/components/common/Faqs";


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
      {/* TopContent with Parallax ServiceMenu */}
      <ParallaxHeader
        backgroundContent={
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#96aaf1] to-[#364076] dark:bg-gradient-to-b dark:from-[#0a0f31] dark:to-[#455079]">
            <div className="absolute top-0 left-1/6 w-full h-full text-white rotate-45 opacity-10 text-[22rem] tracking-[1rem] font-bold flex justify-center items-center animate-pulse">
              {t("home.background_text.hello")}
              <br />
              {t("home.background_text.programming")}
              <br />
              {t("home.background_text.world")}
            </div>

            {/* blur-smクラスを削除し、z-indexを追加 */}
            <div className="flex justify-end items-center blur-sm relative">
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
            <div className="absolute top-0 left-0 right-0 w-full  mx-auto  h-full ">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 md:p-6 bg-white/30 dark:bg-black/30 w-full md:w-3/4 md:mb-12 md:rounded-lg md:shadow-lg">
                {/* <h3 className="text-3xl md:text-4xl  tracking-widest text-black dark:text-white">
                  <strong className="text-5xl md:text-5xl">
                    {t("home.hero.title")}
                  </strong>
                </h3>
                <p className="text-xs md:text-sm font-semibold tracking-wide text-slate-700 dark:text-gray-400 mt-3">
                  {t("home.hero.description")}
                </p>
                <div className="flex justify-center items-center w-full">
                  <div className="w-full md:flex justify-around mt-4 gap-10">
                    <Button className="w-full md:text-base font-bold">
                      {t("home.hero.request_docs")}
                    </Button>
                    <Button className="w-full mt-4 md:mt-0 md:text-base font-bold dark:bg-indigo-900 dark:text-white">
                      {t("home.hero.view_pricing")}
                    </Button>
                  </div>
                  <div className="w-fit p-2 mt-4 border-l ml-4">
                    <span className="writing-mode-vertical-rl tracking-[3px] font-extralight text-[10px] flex justify-center items-center animate-smoothScroll">
                      {t("home.hero.scroll")} →
                    </span>
                  </div>
                </div> */}
                <div className="relative isolate px-6 pt-14 lg:px-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                  </div>
                  <div className="mx-auto max-w-2xl lg:py-12">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding.{" "}
                        <a href="#" className="font-semibold text-indigo-600">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        {t("home.hero.title")}
                      </h1>
                      <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        {t("home.hero.description")}
                      </p>
                      <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                          href="#"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {t("home.hero.request_docs")}
                        </a>
                        <a
                          href="#"
                          className="text-sm/6 font-semibold text-gray-900"
                        >
                          {t("home.hero.view_pricing")}→
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <FeatureSection />
      <CtaSection />
      <NewsSection />
      <GridTile />
      <PricingSection />
      <TimeLine />
      <BlogSection />
      <MemberGrid />
      <Testmonial />
      <ContentSection />
      <LogoCloud />
      <Faqs />
      {/* バナー */}

      <div className="w-full h-full max-w-pagewidth mx-auto">
        <div className="relative min-h-[170px] md:min-h-[350px] overflow-hidden my-8 md:my-12 mx-5 rounded-md shadow-md">
          <div className="absolute top-0 left-0 w-full ">
            <Image
              src={"/assets/images/whats-96fune.jpg"}
              className="object-cover w-full h-auto blur-[1px] "
              width={1920}
              height={1080}
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-full h-full z-10 ">
            <div className="flex justify-center items-center h-full w-full">
              <p className="block text-white tracking-widest font-bold text-xl md:text-5xl">
                {t("home.whyus.title")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}

      <div className="w-full h-full  relative">
        <div className="overflow-hidden whitespace-nowrap my-8">
          <Marquee speed={30}>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
            <div className="w-[120px] md:w-[320px] h-auto mx-2 md:mx-4">
              <Image
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/320x120"
                alt="Brand"
                width={320}
                height={120}
              />
            </div>
          </Marquee>
        </div>
      </div>

      {/* Service Content - 1 */}

      <div className="">
        <div className="relative w-full py-8 md:py-12  max-w-pagewidth mx-auto md:flex md:justify-center md:items-center md:gap-5 md:p-5">
          <div className="md:w-[50%]">
            <Image
              src={"https://via.placeholder.com/1920x1080"}
              width={1920}
              height={1080}
              alt="test image"
            />
          </div>
          <div className="p-3 my-5 tracking-widest md:w-[50%]">
            <h4 className="font-bold text-3xl md:text-5xl">
              {t("home.talent.title")}
            </h4>
            <p className="mt-5 md:mt-10 text-sm md:text-base font-semibold">
              {t("home.talent.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Service Content - 2 */}
      <div className="relative my-12">
        <div className="text-center">
          <h4 className="text-3xl md:text-5xl font-extrabold">
            {t("home.vision.title")}
          </h4>
          <p className="my-8 md:my-12 text-sm md:text-base tracking-widest font-semibold">
            {t("home.vision.subtitle")}
          </p>
        </div>
        <RowSection
          heading={t("home.recruitment.title")}
          desc={t("home.recruitment.description")}
          bgText={t("home.row_section.bg_text_1")}
          btnLabel={t("home.recruitment.button")}
          imgSrc="https://via.placeholder.com/1920x1080"
          subText={t("home.recruitment.subtext")}
          flexReverse={false}
        />

        <RowSection
          heading={t("home.recruitment.title")}
          desc={t("home.recruitment.description")}
          bgText={t("home.row_section.bg_text_2")}
          btnLabel={t("home.recruitment.button")}
          imgSrc="https://via.placeholder.com/1920x1080"
          subText={t("home.recruitment.subtext")}
          flexReverse={true}
        />
      </div>

      {/* Service Card */}

      <div className="relative pt-6 pb-14 px-5 w-full max-w-pagewidth m-auto">
        <div className="w-full bg-indigo-400 dark:bg-indigo-800 py-6  px-3 rounded-xl shadow-md text-white md:flex md:justify-around md:items-center">
          <div className="md:w-[60%]">
            <h3 className="text-2xl md:text-4xl tracking-wider font-bold mb-8 leading-8 whitespace-nowrap">
              {t("home.pricing.title")}
            </h3>
            <p className="my-6 font-semibold leading-6 md:text-lg">
              {t("home.pricing.description")}
            </p>
          </div>
          <div className="md:w-[30%]">
            <Button
              variant={"outline"}
              className="bg-transparent w-full h-14 rounded-full md:bg-white md:dark:bg-indigo-950 md:text-gray-500 md:dark:text-white font-bold md:text-xl tracking-wider"
            >
              {t("home.pricing.button")}
            </Button>
          </div>
        </div>
      </div>

      {/* Service Menu */}

      <div className="relative -z-20 py-12">
        <div className="w-full max-w-pagewidth m-auto p-5">
          <div className="relative w-full h-auto">
            <div className="absolute top-12 md:top-3 left-0 right-0 -z-10">
              <p className="text-center text-7xl md:text-9xl md:scale-150 font-bold text-blue-100 dark:opacity-20">
                {t("home.background_text.options")}
              </p>
            </div>
            <h4 className="text-center font-bold text-3xl md:text-5xl">
              {t("home.options.title")}
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
              variant={"default"}
              className="rounded-full tracking-widest font-bold py-2 px-5 md:px-14 md:py-6 md:text-xl shadow-sm"
            >
              {t("home.options.button")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}