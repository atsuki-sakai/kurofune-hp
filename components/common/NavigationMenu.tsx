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
      title: t("menu.news_title"),
      href: "/news",
      description: t("menu.news_description"),
    },
    {
      title: t("menu.blog"),
      href: "/blog",
      description: t("menu.blog_description"),
    },
    {
      title: t("menu.faq"),
      href: "/faq",
      description: t("menu.faq_description"),
    },
    {
      title: t("menu.contact_title"),
      href: "/contact",
      description: t("menu.contact_description"),
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{t("menu.service")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {t("menu.all-services")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("menu.service_description")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title={t("menu.shopify_title")}>
                {t("menu.shopify_description")}
              </ListItem>
              <ListItem
                href="/docs/installation"
                title={t("menu.web-development_title")}
              >
                {t("menu.web-development_description")}
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title={t("menu.business-improvement_title")}
              >
                {t("menu.business-improvement_description")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("menu.company")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" locale={lang} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("menu.price-title")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" locale={lang} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("menu.contact_title")}
            </NavigationMenuLink>
          </Link>
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
          <div className="text-sm font-medium leading-none ">{title}</div>
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
