import "./globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "@/core/providers/store.provider";
import Header from "@/ui/containers/Header";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Footer from "@/ui/containers/Footer";

export const metadata: Metadata = {
  title: {
    default: "AYNA Portal",
    template: "%s | AYNA Portal",
  },
  description: "AYNA Portal Description",
  keywords: "ayna, portal, e xidmet, gov, xidmet",
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextjs",
    title: {
      default: "AYNA Portal",
      template: "%s AYNA Portal",
    },
    description: "AYNA Portal Description",
  },
  publisher: "Azsoftware QSC",
  authors: {
    name: "Emil Mirzayev",
    url: "https://azsoftware.az/",
  },
  applicationName: "AYNA Portal",
  icons: "/favicon.ico",
  openGraph: {
    url: "https://azsoftware.az/",
    title: "AYNA Portal",
    description: "AYNA Portal Description",
    siteName: "AYNA Portal",
    type: "website",
  },
};


export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  if (!routing.locales.includes('en')) {
    redirect('/users')
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <main>
          <NextIntlClientProvider messages={messages}>
            <StoreProvider>
              <div className="min-h-screen relative flex flex-col">
                {/* <Header /> */}
                <div className="relative flex-grow z-10">{children}</div>
                {/* <Footer /> */}
              </div>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
              />
            </StoreProvider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}