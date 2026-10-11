import "./globals.css";
import FloatingChatbot from "@/components/FloatingChatbot";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "SMAS Daar el-Qolam 2",
  description: "Website profil SMAS Daar el-Qolam 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children} 
        <FloatingChatbot />
        </main>
        <Footer />
      </body>
    </html>
  );
}