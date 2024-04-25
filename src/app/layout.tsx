import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "@/core/providers/store.provider";
import Header from "@/ui/containers/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next Starter",
    template: "%s Next Starter",
  },
  description: "Next Starter Description",
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextjs",
    title: {
      default: "Next Starter",
      template: "%s Next Starter",
    },
    description: "Next Starter Description",
  },
  publisher: "Company Name",
  authors: {
    name: "Emil Mirzayev",
    url: "https://codemode.az",
  },
  applicationName: "Next Starter",
  icons: "/favicon.ico",
  openGraph: {
    url: "http://localhost:3000",
    title: "Next Starter",
    description: "Next Starter Description",
    siteName: "Next Starter",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
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
      </body>
    </html>
  );
}
