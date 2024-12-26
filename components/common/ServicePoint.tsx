import Image from "next/image";
import { useTranslation } from "@/app/i18n";

export default async function ServicePoint({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
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
  );
}
