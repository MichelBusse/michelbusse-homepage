import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

type LayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: LayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return children;
}
