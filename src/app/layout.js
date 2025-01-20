import localFont from "next/font/local";
import "./globals.css";
import Myastroredux from "@/lib/Myastroredux";
import { SocketProvider } from "@/lib/SocketContext";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Best Astrology App | Myastro",
  description: "Best Astrology App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Myastroredux>
          <SocketProvider>
              {children}
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
          </SocketProvider>
        </Myastroredux>
      </body>
    </html>
  );
}
