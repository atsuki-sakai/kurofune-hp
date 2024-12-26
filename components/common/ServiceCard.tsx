import { useTranslation } from "@/app/i18n";
import { Button } from "@/components/ui/button";

export default async function ServiceCard({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
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
  );
}
