import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import Logo from "@/components/common/Logo";

import { FaInstagram, FaFacebook } from "react-icons/fa";

import { Button } from "@/components/ui/button";

type Props = {
  lang: string;
};

async function Footer({ lang }: Props) {
  const { t } = await useTranslation(lang, "common");
  const components = [
    {
      title: t("menu.news"),
      href: "/docs/primitives/progress",
      description: t("menu.news_description"),
    },
    {
      title: t("menu.blog"),
      href: "/docs/primitives/tabs",
      description: t("menu.blog_description"),
    },
    {
      title: t("menu.company"),
      href: "/",
      description: t("menu.company_description"),
    },
  ];

  const _buildInfoItem = ({ title, href }: { title: string; href: string }) => {
    return (
      <li>
        <Button variant={"link"} className="p-0 ">
          <Link href={href} className="tracking-widest font-light">
            {title}
          </Link>
        </Button>
      </li>
    );
  };

  return (
    <footer className="bg-slate-100 dark:bg-black">
      <div className="max-w-pagewidth mx-auto p-4">
        <div className="md:flex md:justify-between md:items-start gap-12 pb-5 mb-5 w-full border-b border-slate-300">
          <div className="mt-5 w-full">
            <h5 className="text-xl font-bold tracking-widest">INFOMATION</h5>
            <div className="my-3">
              <ul className="list-inside">
                {_buildInfoItem({ title: "HOME", href: "/" })}
                {_buildInfoItem({ title: "HOME", href: "/" })}
                {_buildInfoItem({ title: "HOME", href: "/" })}
                {_buildInfoItem({ title: "HOME", href: "/" })}
                {_buildInfoItem({ title: "HOME", href: "/" })}
              </ul>
            </div>
          </div>
          <div className="md:mt-5  w-full">
            <Link
              href={"/contact"}
              className="block w-fit mx-auto  my-8 duration-800 animate-pulse "
            >
              <span className="block tracking-wider px-8 py-3 rounded-full shadow-sm bg-black text-white dark:bg-indigo-900 dark:text-white transition-all duration-500 hover:-translate-y-1 hover:rotate-1">
                お問い合わせはこちらから
              </span>
            </Link>
            <div className="w-full h-full relative">
              <iframe
                className="object-cover w-full h-full min-h-[250px] md:min-h-[350px]"
                width={500}
                height={400}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1634.049983662737!2d135.12196065603052!3d35.004202604594624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1727897617802!5m2!1sja!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <Logo />
              <div className="mt-4 space-y-2">
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  〒150-0002
                  <br />
                  東京都渋谷区渋谷1-2-3 サンプルビル5階
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
}


export default Footer;
