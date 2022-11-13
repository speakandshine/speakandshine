import * as React from "react";
import { ASPECT_RATIO_LOGO } from "src/shared/helpers/aspectRatios";
import { scrollToSection } from "src/shared/helpers/scroll";
import Button from "../Button";
import FilledImage from "../FilledImage";
import styles from "./Navbar.module.css";

export interface IButtonProps {
  MenuItems: any[];
  mobileDrawerOpen: boolean;
  toggleMobileDrawerOpen: any;
}
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = React.forwardRef((props: IButtonProps, ref) => {
  const { MenuItems, mobileDrawerOpen, toggleMobileDrawerOpen } = props;

  return (
    <header className={styles.header}>
      {/* MOBILE */}
      <div className="grid grid-cols-4 laptop:hidden w-full h-full items-center">
        <div className="col-span-1" />
        <div
          className="flex justify-center col-span-2"
          onClick={() => scrollToSection()}
        >
          <FilledImage
            src="/assets/shared/Layout/Logo.png"
            alt="Speech Shine Logo"
            aspectRatio={ASPECT_RATIO_LOGO}
            height={90}
          />
        </div>

        <div className="col-span-1">
          <div className="flex items-center justify-center h-full">
            <Button
              variant="standard"
              onClick={() => toggleMobileDrawerOpen(!mobileDrawerOpen)}
            >
              {mobileDrawerOpen && <GrClose />}
              {!mobileDrawerOpen && <GiHamburgerMenu />}
            </Button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden laptop:grid grid-cols-5 items-center">
        <div
          className="col-span-1 flex justify-center"
          onClick={() => scrollToSection()}
        >
          <FilledImage
            src="/assets/shared/Layout/Logo.png"
            alt="Speech Shine Logo"
            aspectRatio={ASPECT_RATIO_LOGO}
            height={90}
          />
        </div>
        <div className="col-span-4 flex justify-evenly">{MenuItems}</div>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
