import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n";

export default async function FeatureSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");
  const features = [
    {
      name: t("home.feature.items.name-1"),
      description: t("home.feature.items.description-1"),
      icon: ShoppingBagIcon,
    },
    {
      name: t("home.feature.items.name-2"),
      description: t("home.feature.items.description-2"),
      icon: CloudArrowUpIcon,
    },
    {
      name: t("home.feature.items.name-3"),
      description: t("home.feature.items.description-3"),
      icon: ServerIcon,
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold text-indigo-600">
                {t("home.feature.subtitle")}
              </h2>
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {t("home.feature.title")}
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                {t("home.feature.description")}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-indigo-600"
                    />
                    {t("home.feature.name-1")}
                  </dt>{" "}
                  <dd className="block text-sm">
                    {t("home.feature.description-1")
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} className="mt-2">
                          {line}
                        </p>
                      ))}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-indigo-600"
                    />
                    {t("home.feature.name-2")}
                  </dt>{" "}
                  <dd className="block text-sm">
                    {t("home.feature.description-2")
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} className="mt-2">
                          {line}
                        </p>
                      ))}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <ServerIcon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-indigo-600"
                    />
                    {t("home.feature.name-3")}
                  </dt>{" "}
                  <dd className="block text-sm">
                    {t("home.feature.description-3")
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} className="mt-2">
                          {line}
                        </p>
                      ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="assets/images/work_flow.jpg"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
