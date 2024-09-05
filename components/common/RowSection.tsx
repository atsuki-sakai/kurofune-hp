import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";

interface RowSectionProps {
  heading: string;
  desc: string;
  bgText: string;
  btnLabel: string;
  imgSrc: string;
  subText?: string;
  alt?: string;
  flexReverse?: boolean;
}

const RowSection = ({
  heading,
  desc,
  bgText,
  btnLabel,
  imgSrc,
  subText,
  alt,
  flexReverse,
}: RowSectionProps) => {
  return (
    <div
      className={`w-full max-w-pagewidth m-auto px-5 py-14  md:flex md:justify-center md:items-center md:gap-8 ${
        flexReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative tracking-wider mb-10 md:mb-0">
        <div
          className={`absolute top-0 left-0 -z-10 rotate-90 ${
            flexReverse ? "translate-x-[50%]" : "-translate-x-[50%]"
          }`}
        >
          <div className="flex justify-center items-center w-full h-auto translate-x-[25%]">
            <p className="text-center text-7xl font-extrabold text-blue-100">
              {bgText}
            </p>
          </div>
        </div>
        <p className="text-3xl font-bold">{heading}</p>
        <span className="block py-5">{desc}</span>
        {subText && <span className="block py-5">{subText}</span>}
        <Button className="mt-8 px-12 rounded-full">{btnLabel}</Button>
      </div>
      <div className="shadow-sm">
        <Image
          src={imgSrc}
          width={1920}
          height={1080}
          alt={alt ? alt : heading}
        />
      </div>
    </div>
  );
};

export default RowSection;