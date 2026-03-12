import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TextPage from "@/components/TextPage";
import { isLocale, locales } from "@/lib/i18n";

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

  return {
    title: locale === "de" ? "Impressum | Michel Busse" : "Imprint | Michel Busse",
    description:
      locale === "de"
        ? "Impressum von Michel Busse."
        : "Imprint and contact details for Michel Busse.",
    alternates: {
      canonical: `/${locale}/imprint`,
      languages: {
        en: "/en/imprint",
        de: "/de/imprint",
      },
    },
  };
}

export default async function ImprintPage({ params }: PageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale === "de" ? <GermanImprint /> : <EnglishImprint />;
}

function GermanImprint() {
  return (
    <TextPage>
      <h1>Impressum</h1>
      <p>
        Michel Busse
        <br />
        Kirchberger Str. 62
        <br />
        08107 Kirchberg
      </p>

      <h4>Kontakt</h4>
      <p>
        Telefon: 0160 98709043
        <br />
        E-Mail: contact@michelbusse.dev
      </p>

      <h4>EU-Streitschlichtung</h4>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <br />
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

      <h4>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </TextPage>
  );
}

function EnglishImprint() {
  return (
    <TextPage>
      <h1>Imprint</h1>
      <p>
        Michel Busse
        <br />
        Kirchberger Str. 62
        <br />
        08107 Kirchberg
        <br />
        Germany
      </p>

      <h4>Contact</h4>
      <p>
        Phone: 0160 98709043
        <br />
        Email: contact@michelbusse.dev
      </p>

      <h4>EU dispute resolution</h4>
      <p>
        The European Commission provides a platform for online dispute
        resolution:
        <br />
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>You can find our email address above in this imprint.</p>

      <h4>Consumer dispute resolution / universal arbitration board</h4>
      <p>
        We are neither willing nor obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>
    </TextPage>
  );
}
