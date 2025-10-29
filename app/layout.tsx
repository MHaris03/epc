// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  // you can also use `variable: "--font-poppins"` if you prefer CSS variable usage
});

export const metadata = {
  title: "EPC 2.0",
  description: "Trade platform UI layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#f5f8fb] text-gray-900">
        {children}
      </body>
    </html>
  );
}
