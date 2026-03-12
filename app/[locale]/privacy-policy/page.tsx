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
    title:
      locale === "de"
        ? "Datenschutzerklärung | Michel Busse"
        : "Privacy Policy | Michel Busse",
    description:
      locale === "de"
        ? "Datenschutzhinweise für michelbusse.dev."
        : "Privacy policy for michelbusse.dev.",
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: "/en/privacy-policy",
        de: "/de/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale === "de" ? <GermanPrivacyPolicy /> : <EnglishPrivacyPolicy />;
}

function EnglishPrivacyPolicy() {
  return (
    <TextPage>
      <h1>Privacy Policy</h1>
      <p>
        This privacy policy explains which personal data is processed when you
        use michelbusse.dev and when you contact Michel Busse through the
        website.
      </p>

      <h4>Controller</h4>
      <p>
        Michel Busse
        <br />
        Kirchberger Str. 62
        <br />
        08107 Kirchberg
        <br />
        Email: contact@michelbusse.dev
      </p>

      <h4>Server log files</h4>
      <p>
        When you visit this website, the hosting infrastructure processes
        technical data such as your IP address, browser information, operating
        system, referrer, and access time in server log files.
      </p>
      <p>
        This processing is necessary to deliver the website, maintain system
        security, and troubleshoot technical issues. The legal basis is Article
        6(1)(f) GDPR based on the legitimate interest in operating a secure and
        stable website.
      </p>

      <h4>Contact form and email communication</h4>
      <p>
        If you use the contact form, the website processes the email address and
        message you provide to handle your request. The data is submitted to the
        website backend and forwarded as an email to contact@michelbusse.dev.
      </p>
      <p>
        The legal basis is Article 6(1)(b) GDPR if your request relates to a
        potential business relationship or Article 6(1)(f) GDPR for general
        inquiries.
      </p>
      <p>
        Your data is stored only for as long as necessary to process the
        request and any follow-up communication, unless statutory retention
        obligations require longer storage.
      </p>

      <h4>Recipients</h4>
      <p>
        Personal data may be processed by hosting and infrastructure providers
        involved in operating the website and by the email infrastructure used
        to deliver contact requests.
      </p>

      <h4>Your rights</h4>
      <p>
        You have the right to request access, rectification, erasure,
        restriction of processing, data portability, and to object to
        processing where the legal requirements are met.
      </p>
      <p>
        You also have the right to lodge a complaint with a supervisory
        authority.
      </p>

      <h4>Security</h4>
      <p>
        This website uses encryption during transmission where supported by the
        deployed infrastructure in order to protect your data from unauthorized
        access.
      </p>

      <h4>Contact regarding privacy</h4>
      <p>
        If you have questions about privacy or want to exercise your rights,
        please contact:
        <br />
        Michel Busse
        <br />
        contact@michelbusse.dev
      </p>
    </TextPage>
  );
}

function GermanPrivacyPolicy() {
  return (
    <TextPage>
      <h1>Datenschutzerklärung</h1>
      <p>
        Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten bei
        der Nutzung von michelbusse.dev sowie bei einer Kontaktaufnahme über die
        Website verarbeitet werden.
      </p>

      <h4>Verantwortlicher</h4>
      <p>
        Michel Busse
        <br />
        Kirchberger Str. 62
        <br />
        08107 Kirchberg
        <br />
        E-Mail: contact@michelbusse.dev
      </p>

      <h4>Server-Logfiles</h4>
      <p>
        Beim Aufruf dieser Website verarbeitet die Hosting-Infrastruktur
        technische Daten wie IP-Adresse, Browserinformationen, Betriebssystem,
        Referrer und Zugriffszeit in Server-Logfiles.
      </p>
      <p>
        Diese Verarbeitung ist erforderlich, um die Website auszuliefern, die
        Systemsicherheit zu gewährleisten und technische Probleme zu beheben.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO auf Basis des
        berechtigten Interesses an einem sicheren und stabilen Websitebetrieb.
      </p>

      <h4>Kontaktformular und E-Mail-Kommunikation</h4>
      <p>
        Wenn Sie das Kontaktformular nutzen, verarbeitet die Website die von
        Ihnen angegebene E-Mail-Adresse und Nachricht, um Ihre Anfrage zu
        bearbeiten. Die Daten werden an das Website-Backend übermittelt und als
        E-Mail an contact@michelbusse.dev weitergeleitet.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
        einer möglichen Geschäftsbeziehung zusammenhängt, oder Art. 6 Abs. 1
        lit. f DSGVO bei allgemeinen Anfragen.
      </p>
      <p>
        Ihre Daten werden nur so lange gespeichert, wie dies für die
        Bearbeitung Ihrer Anfrage und mögliche Rückfragen erforderlich ist,
        sofern keine gesetzlichen Aufbewahrungspflichten eine längere
        Speicherung verlangen.
      </p>

      <h4>Empfänger</h4>
      <p>
        Personenbezogene Daten können von Hosting- und Infrastruktur-Diensten
        verarbeitet werden, die für den Betrieb der Website erforderlich sind,
        sowie von der E-Mail-Infrastruktur zur Zustellung von Kontaktanfragen.
      </p>

      <h4>Ihre Rechte</h4>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
        Verarbeitung, sofern die gesetzlichen Voraussetzungen erfüllt sind.
      </p>
      <p>
        Außerdem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu
        beschweren.
      </p>

      <h4>Sicherheit</h4>
      <p>
        Diese Website nutzt bei der Datenübertragung, soweit von der
        eingesetzten Infrastruktur unterstützt, Verschlüsselung, um Ihre Daten
        vor unbefugtem Zugriff zu schützen.
      </p>

      <h4>Kontakt zum Datenschutz</h4>
      <p>
        Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte ausüben möchten,
        kontaktieren Sie bitte:
        <br />
        Michel Busse
        <br />
        contact@michelbusse.dev
      </p>
    </TextPage>
  );
}
