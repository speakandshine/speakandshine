import { ASPECT_RATIO_LOGO } from "src/shared/helpers/aspectRatios";
import { scrollToSection } from "src/shared/helpers/scroll";
import Button from "../../Button";
import FilledImage from "../../FilledImage";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";

export interface INavbarProps {
  MenuItems: any[];
  mobileDrawerOpen: boolean;
  toggleMobileDrawerOpen: any;
}

const Navbar = (props: INavbarProps) => {
  const { MenuItems, mobileDrawerOpen, toggleMobileDrawerOpen } = props;

  return (
    <header className={styles.header}>
      {/* MOBILE */}
      <div className="grid grid-cols-4 laptop:hidden w-full h-full items-center">
        <div className="col-span-1" />
        <div
          className="flex justify-center col-span-2 cursor-pointer"
          onClick={() => scrollToSection()}
        >
          <FilledImage
            src="/assets/shared/Logo.png"
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
          className="col-span-1 flex justify-center cursor-pointer"
          onClick={() => scrollToSection()}
        >
          <FilledImage
            src="/assets/shared/Logo.png"
            alt="Speech Shine Logo"
            aspectRatio={ASPECT_RATIO_LOGO}
            height={90}
          />
        </div>
        <div className="col-span-4 flex justify-evenly">{MenuItems}</div>
      </div>
    </header>
  );
};

export default Navbar;
