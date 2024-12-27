import React from "react";
import { useTranslation } from "../i18n";

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
import TopSection from "@/components/common/TopSection";
import HowToBanner from "@/components/common/HowToBanner";
import MarqueeSection from "@/components/common/MarqueeSection";
import ServicePoint from "@/components/common/ServicePoint";
import ServiceColumn from "@/components/common/ServiceColumn";
import ServiceCard from "@/components/common/ServiceCard";
import OptionsSection from "@/components/common/OptionsSection";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");

  return (
    <>
      <TopSection lang={lang} />
      <NewsSection lang={lang} />
      <FeatureSection />
      <MarqueeSection />
      {/* <CtaSection /> */}
      <GridTile />
      <HowToBanner lang={lang} />
      <ServicePoint lang={lang} />
      <ServiceColumn lang={lang} />
      <ServiceCard lang={lang} />
      <BlogSection lang={lang} />
      {/* <PricingSection />
      <TimeLine />
      <MemberGrid />
      <Testmonial />
      <ContentSection />
      <LogoCloud />
      <Faqs /> */}
      <OptionsSection lang={lang} />
    </>
  );
}
