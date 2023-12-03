import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Animlog",
  description: "Generated anime list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />+
        {children}
      </body>
    </html>
  );
}
