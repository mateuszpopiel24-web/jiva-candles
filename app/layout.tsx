import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { ToastProvider } from "../context/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "JIVA Candles – Świece z intencją",
  description: "Naturalne, ręcznie robione świece JIVA, tworzone z uważnością i magią codzienności.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-[#F9F6F2] text-[#3C2A1E] font-lora antialiased">
        <CartProvider>
          <ToastProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
