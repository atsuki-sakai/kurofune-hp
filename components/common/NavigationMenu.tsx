import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Props = {
  lang: string;
};

async function NavigationMenuDemo({ lang }: Props) {
  const { t } = await useTranslation(lang, "common");

  const components = [
    {
      title: t("menu.about-us_title"),
      href: "/docs/primitives/hover-card",
      description: t("menu.about-us_description"),
    },
    {
      title: t("menu.service_title"),
      href: "/docs/primitives/tabs",
      description: t("menu.service_description"),
    },
    {
      title: t("menu.news"),
      href: "/docs/primitives/progress",
      description: t("menu.news_description"),
    },
    {
      title: t("menu.contact"),
      href: "/docs/primitives/scroll-area",
      description: t("menu.contact_description"),
    },
    {
      title: t("menu.blog"),
      href: "/docs/primitives/tabs",
      description: t("menu.blog_description"),
    },
    {
      title: t("menu.faq"),
      href: "/docs/primitives/tooltip",
      description: t("menu.faq_description"),
    },
    {
      title: t("menu.company"),
      href: "/",
      description: t("menu.company_description"),
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <Link href="/service-pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "navigation-menu-link-small"
              )}
            >
              {t("menu.price-title")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="navigation-menu-link-small">
            {t("menu.all-services")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <Image
                        src={"https://via.placeholder.com/150x120"}
                        alt={t("menu.shopify_title")}
                        width={150}
                        height={120}
                      />
                    </div>
                    <div className="mb-2 mt-4 text-sm font-medium">
                      {t("menu.shopify_title")}
                    </div>
                    <p className="text-[11px] tracking-wider leading-4 text-muted-foreground">
                      {t("menu.shopify_description")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title={t("menu.web-development_title")}>
                <p className="text-[11px] tracking-wider leading-[1.4] text-muted-foreground">
                  {t("menu.web-development_description")}
                </p>
              </ListItem>
              <ListItem
                href="/docs/installation"
                title={t("menu.shopify-api_title")}
              >
                <p className="text-[11px] tracking-wider leading-[1.4] text-muted-foreground">
                  {t("menu.shopify-api_description")}
                </p>
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title={t("menu.business-improvement_title")}
              >
                <p className="text-[11px] tracking-wider leading-[1.4] text-muted-foreground">
                  {t("menu.business-improvement_description")}
                </p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="navigation-menu-link-small">
            {t("menu.othermenu")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <p className="text-[11px] leading-[1.4] tracking-wider text-muted-foreground">
                    {component.description}
                  </p>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
