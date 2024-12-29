import Heading from "@/components/common/Heading";
import PricingSection from "@/components/common/PricingSection";
export default function PricePage({ lang }: { lang: string }) {
  return (
    <>
      <Heading
        title="Price"
        content="料金"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <PricingSection lang={lang} />
    </>
  );
}
