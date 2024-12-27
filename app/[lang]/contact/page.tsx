import ParallaxHeader from "@/components/common/ParallaxHeader";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
export default function ContactPage() {
  return (
    <>
      <ParallaxHeader
        height="sm"
        backgroundContent={
          <div className="bg-white h-full w-full flex items-center justify-center">
            <Image
              src="https://via.placeholder.com/1920x1080"
              alt="お問い合わせ"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </div>
        }
      />
      <div className="container mx-auto px-4 py-8 mt-[--header-height]">
        <ContactForm />
      </div>
    </>
  );
}
