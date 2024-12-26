import { useTranslation } from "@/app/i18n";
import RowSection from "@/components/common/RowSection";
export default async function ServiceColumn({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
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
  );
}
