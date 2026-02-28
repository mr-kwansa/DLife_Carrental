import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

type SiteLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
};

const SiteLayout = ({ children, mainClassName = "pt-40" }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
