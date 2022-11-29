import * as React from "react";
import styles from "./Layout.module.css";

import { scrollToSection } from "src/shared/helpers/scroll";
import Button from "src/shared/components/Button";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as fbq from "src/shared/helpers/facebookPixel";

export interface ILayoutProps {
  children?: React.ReactNode;
  sections: any[];
}

const Layout = (props: ILayoutProps) => {
  const { children, sections } = props;
  const [mobileDrawerOpen, toggleMobileDrawerOpen] = React.useState(false);

  const MenuItems = sections.map((section) => {
    return section.title === "Enquire Now" ? (
      <div className="flex flex-col items-center" key={uuidv4()}>
        <Button
          onClick={() => {
            scrollToSection(section.ref);
            toggleMobileDrawerOpen(false);
            fbq.event("View Enquiry Section", {});
          }}
          variant="booking"
          selected={section.inView}
        >
          {section.title}
        </Button>
      </div>
    ) : (
      <div className="flex flex-col items-center" key={uuidv4()}>
        <Button
          onClick={() => {
            scrollToSection(section.ref);
            toggleMobileDrawerOpen(false);
          }}
          variant="standard"
          selected={section.inView}
        >
          {section.title}
        </Button>
      </div>
    );
  });

  return (
    <>
      {/* NAVBAR / HEADER */}

      <Navbar
        MenuItems={MenuItems}
        mobileDrawerOpen={mobileDrawerOpen}
        toggleMobileDrawerOpen={toggleMobileDrawerOpen}
      />

      {mobileDrawerOpen && (
        <div
          className={`laptop:hidden flex fixed z-[2]  flex-col px-[10px] pb-[10px] w-full bg-white ${styles.mobileMenu}`}
        >
          {MenuItems}
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="mt-[90px]">{children}</main>

      {/* FOOTER */}
      <Footer sections={sections} />
    </>
  );
};

export default Layout;
