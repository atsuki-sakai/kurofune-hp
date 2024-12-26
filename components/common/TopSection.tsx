import ParallaxHeader from "@/components/common/ParallaxHeader";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { useTranslation } from "@/app/i18n";
import Link from "next/link";
export default async function TopSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  const desktopImage = "/assets/images/akusyu-pc.jpg";
  const spImage = "/assets/images/akusyu-sp.jpg";

  return (
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
          <div className="absolute top-0 left-0 right-0 w-full mx-auto h-full">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 p-4 md:p-6 bg-white/50 dark:bg-black/30 w-full max-w-7xl md:w-3/4 md:mb-12 md:rounded-lg md:shadow-lg">
              <div className="relative isolate px-6 pt-12 lg:px-4">
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
                <div className="mx-auto w-full max-w-5xl lg:py-12">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 transition-all duration-300 hover:ring-gray-900/20 bg-white hover:bg-white/50">
                      {t("home.hero.banner_text")}{" "}
                      <a href="#" className="font-semibold text-indigo-600">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {t("home.hero.read_more")}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                      {t("home.hero.title")}
                    </h1>
                    <p className="mt-8 text-pretty text-base font-medium text-slate-600 sm:text-base">
                      {t("home.hero.description")}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Link
                        href="/"
                        className="rounded-md bg-indigo-600 px-8 py-3 transition-all duration-300 tracking-wide text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {t("home.hero.request_docs")}
                      </Link>
                      <Link
                        href="/"
                        className="text-sm/6 text-gray-900 tracking-widest underline underline-offset-4 text-indigo-600"
                      >
                        {t("home.hero.view_pricing")}→
                      </Link>
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
  );
}
