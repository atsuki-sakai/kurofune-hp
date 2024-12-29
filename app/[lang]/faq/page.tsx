import Heading from "@/components/common/Heading";
import Faqs from "@/components/common/Faqs";

export default function FaqPage({ params }: { params: { lang: string } }) {
  return (
    <>
      <Heading
        title="FAQ"
        content="よくあるご質問"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <div className="container w-full max-w-5xl mx-auto min-h-screen">
        <Faqs lang={params.lang} />
      </div>
    </>
  );
}
