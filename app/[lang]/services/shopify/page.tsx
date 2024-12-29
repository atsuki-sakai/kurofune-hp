import Heading from "@/components/common/Heading";
import Feature from "@/components/services/Feature";
import Faq from "@/components/services/Faq";

export default function ServicesShopifyPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Heading
        title="Services"
        content="サービス"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <Feature />
      <Faq />
    </>
  );
}
