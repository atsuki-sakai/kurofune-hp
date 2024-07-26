import { useTranslation } from "../i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");

  return (
    <div>
      <h1>{t("home.text-1")}</h1>
      <p>{t("home.text-2")}</p>
    </div>
  );
}
