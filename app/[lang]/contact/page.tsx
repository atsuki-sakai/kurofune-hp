import React from "react";
import Image from "next/image";
import ParallaxHeader from "@/components/common/ParallaxHeader";
import ContactForm from "@/components/contact/ContactForm";

const placeholderImg = "https://via.placeholder.com/1920x1080";

const ContactPage: React.FC = () => {
  return (
    <div className="relative w-full ">
      <ParallaxHeader
        height="sm"
        backgroundContent={
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={placeholderImg}
              height={1920}
              width={1080}
              alt="contact image"
            />
          </div>
        }
      />
      <div className="relative z-10 opacity-90 min-h-screen  md:max-w-[800px] mx-auto">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8 uppercase">Contact Us</h1>

          <p className="p-3 mb-8 rounded-md shadow-sm bg-green-50 text-green-600 text-sm leading-5 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
