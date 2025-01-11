import { useTranslation } from "@/app/i18n";
import { Button } from "@/components/ui/button";

export default async function OptionsSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
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
              Shopify
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-100 w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex"></div>
            <span className="text-xs md:text-base text-gray-500 mt-2 tracking-wide text-center px-2">
              Dify
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-muted w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex"></div>
            <span className="text-xs md:text-base text-muted-foreground mt-2 tracking-wide text-center px-2">
              Next.js
            </span>
          </div>
          <div className="w-full flex justify-evenly items-center  col-span-3">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-muted w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex "></div>
              <span className="text-xs md:text-base text-muted-foreground mt-2 tracking-wide text-center px-2">
                GCP・Firebase・Supabase
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-muted w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex "></div>
              <span className="text-xs md:text-base text-muted-foreground mt-2 tracking-wide text-center px-2">
                Automation Tools
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
  );
}
