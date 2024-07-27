import Image from "next/image";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>
      <p>{t("home.text-2")}</p>
    </div>
  );
}
