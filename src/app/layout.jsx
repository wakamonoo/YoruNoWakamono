{
  /* ———————————————————————————————————— imports ——— */
}
import { IconBase } from "react-icons";
import "./globals.css";
import {
  Bangers,
  Rubik,
  Black_Han_Sans,
  Anton,
  Bebas_Neue,
  Roboto,
} from "next/font/google";
import { LoaderProvider } from "@/context/loaderContext";

{
  /* ———————————————————————————————————— fonts config ——— */
}
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const blackHan = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alt",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tall",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tall-alt",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Metadata
export const metadata = {
  title: {
    default: "Joven Bataller | Full Stack Developer Portfolio",
    template: "%s | Joven Bataller",
  },
  description:
    "Joven Bataller is a full stack developer specializing in React, Next.js, Node.js, and modern web applications.",

  icons: {
    icon: [
      { url: "/icons/logo.png" },
      { url: "/icons/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/logo.png",
    shortcut: "/icons/logo.png",
  },

  openGraph: {
    title: "Joven Bataller | Full Stack Developer Portfolio",
    description:
      "Joven Bataller is a full stack developer specializing in React, Next.js, Node.js, and modern web applications.",
    url: "https://wakamonoo.site",
    siteName: "Joven Bataller",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 4096,
        height: 4096,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Joven Bataller | Full Stack Developer Portfolio",
    description:
      "Joven Bataller is a full stack developer specializing in React, Next.js, Node.js, and modern web applications.",
    images: "/og-image.png",
  },

  metadataBase: new URL("https://wakamonoo.site"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${rubik.variable} ${blackHan.variable} ${anton.variable} ${bebasNeue.variable} ${roboto.variable} scroll-smooth`}
      >
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
