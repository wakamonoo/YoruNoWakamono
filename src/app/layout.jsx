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

export const metadata = {
  title: "yorunowakamono",
  description: "Joven Bataller AOT Themed Web Developer Portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${rubik.variable} ${blackHan.variable} ${anton.variable} ${bebasNeue.variable} ${roboto.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
