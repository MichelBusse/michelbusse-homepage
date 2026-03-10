import type { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

type PageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = siteContent[locale];

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url: `/${locale}`,
    },
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale as Locale];

  return (
    <main>
      <Header content={content.header} />
      <About content={content.about} />
      <Technologies categories={content.technologies} />
      <Portfolio projects={content.portfolio.projects} locale={locale} />
      <Career entries={content.career.entries} />
      <Contact content={content.contact} />
    </main>
  );
}
