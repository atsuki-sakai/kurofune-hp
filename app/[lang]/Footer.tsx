import React from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";

import { FaInstagram, FaFacebook } from "react-icons/fa";

import { Button } from "@/components/ui/button";

type Props = {
  lang?: string;
};

const Footer = ({ lang }: Props) => {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-pagewidth mx-auto p-4">
        <div className="md:flex md:justify-between md:items-center gap-12 mb-5 w-full">
          <div className="mt-4 space-y-2 w-full">
            <nav className="">
              <ul className="mb-8 font-bold tracking-widest">
                <li className="pb-1 my-2 border-b border-black w-fit">
                  <Button variant={"ghost"}>
                    <Link href={"/"}>ホーム</Link>
                  </Button>
                </li>
                <li className="pb-1 my-2 border-b border-black w-fit">
                  <Button variant={"ghost"}>
                    <Link href={"/"}>ホーム</Link>
                  </Button>
                </li>
                <li className="pb-1 my-2 border-b border-black w-fit">
                  <Button variant={"ghost"}>
                    <Link href={"/"}>ホーム</Link>
                  </Button>
                </li>
                <li className="pb-1 my-2 border-b border-black w-fit">
                  <Button variant={"ghost"}>
                    <Link href={"/"}>ホーム</Link>
                  </Button>
                </li>
              </ul>
              <ul className="flex flex-col gap-1.5 tracking-wider text-slate-400 text-sm">
                <li>
                  <Link href={"/"}>利用規約</Link>
                </li>
                <li>
                  <Link href={"/"}>プライバシーポリシー</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-5 md:mt-0"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <Link href={`/${lang ?? ""}`} className="block">
                <div className="flex items-center gap-2">
                  <Logo />
                  <h1 className="text-xl font-semibold tracking-wider">
                    KUROFUNE
                  </h1>
                </div>
                <p className="text-[7px] bg-slate-100 dark:bg-slate-900 w-fit py-0.5 px-1 rounded-sm">
                  Bridging Global Tech Solutions
                </p>
              </Link>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  〒150-0002 東京都渋谷区渋谷1-2-3 サンプルビル5階
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  TEL: 03-1234-5678 / FAX: 03-8765-4321
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  営業時間: 平日 9:00-18:00 (土日祝日休業)
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  E-mail: info@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/your_instagram_account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800" />
                </a>
                <a
                  href="https://www.facebook.com/your_facebook_account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-gray-600 hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs mt-2 text-slate-400 text-end">
            &copy; {new Date().getFullYear()} All Rights Reserved KUROFUNE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
