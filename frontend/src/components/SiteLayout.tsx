import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

type SiteLayoutProps = {
  children: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
