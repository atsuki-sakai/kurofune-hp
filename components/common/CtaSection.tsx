import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export default async function CtaSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-background/5 px-6 py-16 ring-1 ring-border/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt=""
              src="assets/images/suport.jpg"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-background sm:text-4xl">
                {t("home.cta.title")}
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-muted">
                {t("home.cta.description")}
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-background sm:grid-cols-2"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <li key={num} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {t(`home.cta.benefit-${num}`)}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link
                  href={`/${lang}/contact`}
                  className="text-sm/6 font-semibold text-primary"
                >
                  {t("home.cta.contact_link")}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-primary to-secondary opacity-25"
          />
        </div>
      </div>
    </div>
  );
}
