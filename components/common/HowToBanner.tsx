import Image from "next/image";
import { useTranslation } from "@/app/i18n";

export default async function HowToBanner({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
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
  );
}
