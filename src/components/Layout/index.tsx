import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ILayoutProps {
  children?: React.ReactNode;
}

const pages = [
  "Home",
  "About Us",
  "Services",
  "Delivery Methods",
  "Fees and Funding",
  "Resources",
  "FAQs",
  "Enquire Now",
];

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <>
      {/* NAVBAR / HEADER */}
      <Navbar pages={pages} />

      {/* MAIN CONTENT */}
      <main className="mt-[90px]">{children}</main>

      {/* FOOTER */}
      <Footer pages={pages} />
    </>
  );
};

export default Layout;
