import { Poppins } from "next/font/google";
import "./globals.css";
import ResizableNavbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import { NextIntlClientProvider} from "next-intl";
// import { notFound } from "next/navigation";
// import { routing } from "@/i18n/routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  console.log("Locale:", locale);
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }
 
  return (
    <html lang="locale" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
         <NextIntlClientProvider>
          <ResizableNavbar />
          {children}
          <FooterSection />
          </NextIntlClientProvider> 
        </body>
    </html>
  );
}
