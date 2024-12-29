import ParallaxHeader from "@/components/common/ParallaxHeader";
import ContactForm from "@/components/contact/ContactForm";
import Heading from "@/components/common/Heading";
export default function ContactPage() {
  return (
    <div>
      <Heading
        title="お問い合わせ"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
        content={
          <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-base">
            お問い合わせから３営業日以内にご連絡いたします。
            <br />
            もし、お問い合わせから３営業日以内にご連絡がない場合は、
            お電話にてご連絡ください。
            <br />
            <a
              className="block mt-6 text-indigo-600 text-base font-light underline underline-offset-4"
              href="tel:07090308805"
            >
              Tel : 070-9030-8805
            </a>
          </p>
        }
      />
      <div className="container mx-auto px-5 md:px-10 max-w-3xl mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
