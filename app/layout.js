import { Inter } from "next/font/google";
import "./globals.css";
import SidebarSection from "./Page/Sidebar/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <div className=""><SidebarSection/></div>
        <div className="absolute lg:w-[85%]  left-48 top-1">{children}</div>
        </div>
        
        </body>
    </html>
  );
}
