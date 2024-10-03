import React from "react";
import ParallaxHeader from "@/components/common/ParallaxHeader";

const placeholderImg = "https://via.placeholder.com/1920x1080";

const ContactPage: React.FC = () => {
  return (
    <div className="relative w-full">
      <ParallaxHeader imageUrl={placeholderImg} altText="Contact" />
      <div className="relative z-10 bg-white bg-opacity-90 min-h-screen">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="mb-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          {/* 追加のコンテンツをここに */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
