import { ASPECT_RATIO_LOGO } from "src/helpers/aspectRatios";
import Button from "../../Button";
import FilledImage from "../../FilledImage";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
import * as fbq from "src/helpers/facebookPixel";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setMobileMenuOpen,
  setSelectedTab,
  toggleMobileMenuOpen,
} from "src/redux/slices/navigationSlice";
import { useRouter } from "next/router";
import { getRouteFromNavItem } from "src/helpers/navigation";

export interface INavbarProps {
  pages: string[];
}

const Navbar = (props: INavbarProps) => {
  const { pages } = props;
  const mobileMenuOpen = useAppSelector(
    (state) => state.navigation.mobileMenuOpen
  );
  const selectedTab = useAppSelector((state) => state.navigation.selectedTab);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const NavbarItems = pages.map((page) => {
    return page === "Enquire Now" ? (
      <div className="flex flex-col items-center" key={uuidv4()}>
        <Button
          onClick={() => {
            router.push(getRouteFromNavItem(page)).then((r) => {
              dispatch(setSelectedTab(page));
              dispatch(setMobileMenuOpen(false));
              fbq.event("View Enquiry Section", {});
            });
          }}
          variant="booking"
          selected={selectedTab === page}
        >
          {page}
        </Button>
      </div>
    ) : (
      <div className="flex flex-col items-center" key={uuidv4()}>
        <Button
          onClick={() => {
            router.push(getRouteFromNavItem(page)).then((r) => {
              dispatch(setSelectedTab(page));
              dispatch(setMobileMenuOpen(false));
            });
          }}
          variant="standard"
          selected={selectedTab === page}
        >
          {page}
        </Button>
      </div>
    );
  });

  return (
    <header>
      <div className={styles.header}>
        {/* MOBILE */}
        <div className="grid grid-cols-4 laptop:hidden w-full h-full items-center">
          <div className="col-span-1" />
          <div
            className="flex justify-center col-span-2 cursor-pointer"
            onClick={() => {
              router.push(getRouteFromNavItem("Home"));
              dispatch(setSelectedTab("Home"));
            }}
          >
            <FilledImage
              src="/assets/shared/Logo.png"
              alt="Speak & Shine Speech Pathology Logo"
              aspectRatio={ASPECT_RATIO_LOGO}
              height={90}
            />
          </div>

          <div className="col-span-1">
            <div className="flex items-center justify-center h-full">
              <Button
                variant="standard"
                onClick={() => dispatch(toggleMobileMenuOpen())}
                ariaLabel="Mobile Hamburger Menu"
              >
                {mobileMenuOpen && <GrClose />}
                {!mobileMenuOpen && <GiHamburgerMenu />}
              </Button>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden laptop:grid grid-cols-5 items-center">
          <div
            className="col-span-1 flex justify-center cursor-pointer"
            onClick={() => {
              router.push(getRouteFromNavItem("Home"));
              dispatch(setSelectedTab("Home"));
            }}
          >
            <FilledImage
              src="/assets/shared/Logo.png"
              alt="Speak & Shine Speech Pathology Logo"
              aspectRatio={ASPECT_RATIO_LOGO}
              height={90}
            />
          </div>
          <div className="col-span-4 flex justify-evenly">{NavbarItems}</div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`laptop:hidden flex fixed z-[2]  flex-col px-[10px] pb-[10px] w-full bg-white ${styles.mobileMenu}`}
        >
          {NavbarItems}
        </div>
      )}
    </header>
  );
};

export default Navbar;
