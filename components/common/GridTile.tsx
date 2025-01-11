import { useTranslation } from "@/app/i18n";

export default async function GridTile({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary">
          {t("home.gridTile.title")}
        </h2>
        <p className="mt-2 max-w-3xl text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("home.gridTile.subtitle")}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-background max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/3 font-semibold text-primary">
                  {t("home.gridTile.tile-1.title")}
                </h3>
                <div className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {t("home.gridTile.tile-1.subtitle")}
                </div>
                <div className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    {[1, 2, 3].map((num) => (
                      <li key={num}>{t(`home.gridTile.tile-1.list-${num}`)}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-base font-bold bg-green-100 w-fit px-3 rounded-full text-green-800">
                      {t("home.gridTile.tile-1.merit-title")}
                    </p>
                    <ul className="mt-1 underline space-y-2">
                      {[1, 2].map((num) => (
                        <li key={num}>
                          {t(`home.gridTile.tile-1.merit-${num}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-background lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">
                  {t("home.gridTile.tile-2.title")}
                </h3>
                <div className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {t("home.gridTile.tile-2.subtitle")}
                </div>
                <div className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    {[1, 2, 3].map((num) => (
                      <li key={num}>{t(`home.gridTile.tile-2.list-${num}`)}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-base font-bold bg-success/20 w-fit px-3 rounded-full text-success">
                      {t("home.gridTile.tile-2.merit-title")}
                    </p>
                    <ul className="mt-1 underline space-y-2">
                      {[1, 2].map((num) => (
                        <li key={num}>
                          {t(`home.gridTile.tile-2.merit-${num}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-background lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">
                  {t("home.gridTile.tile-3.title")}
                </h3>
                <div className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {t("home.gridTile.tile-3.subtitle")}
                </div>
                <div className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    {[1, 2, 3].map((num) => (
                      <li key={num}>{t(`home.gridTile.tile-3.list-${num}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-background" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">
                  {t("home.gridTile.tile-4.title")}
                </h3>
                <div className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {t("home.gridTile.tile-4.subtitle")}
                </div>
                <div className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  <ul>
                    {[1, 2, 3].map((num) => (
                      <li key={num}>{t(`home.gridTile.tile-4.list-${num}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-background max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary">
                  {t("home.gridTile.tile-5.title")}
                </h3>
                <div className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {t("home.gridTile.tile-5.subtitle")}
                </div>
                <div className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    {[1, 2, 3].map((num) => (
                      <li key={num}>{t(`home.gridTile.tile-5.list-${num}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
