import { useState, forwardRef } from "react";
import styles from "./Banner.module.css";

import { GiClick } from "react-icons/gi";
import Button from "src/components/Button";
import { scrollToSection } from "src/helpers/scroll";
import { AiFillCloseCircle } from "react-icons/ai";
import * as fbq from "src/helpers/facebookPixel";
import { useAppDispatch } from "src/redux/hooks";
import { useRouter } from "next/router";
import { getRouteFromNavItem } from "src/helpers/navigation";
import {
  setMobileMenuOpen,
  setSelectedTab,
} from "src/redux/slices/navigationSlice";

export interface IHomeProps {
  // bookSessionRef: any;
  // servicesRef: any;
}

const Banner = forwardRef((props: IHomeProps, ref) => {
  const [bannerOpen, setBannerOpen] = useState(true);

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className={styles.backdrop} ref={ref as any}>
      <div className="absolute w-full">
        {bannerOpen && (
          <div className="h-full p-[15px] z-[2] bg-primary-yellow text-center text-black font-bold flex justify-center items-center">
            <div className="grid grid-cols-12 w-full">
              <div className="col-span-1"> </div>
              <h1 className="col-span-10 text-[16px] laptop:text-[24px]">
                Enquire now to secure appointments for 2023!
              </h1>
              <div className="col-span-1 flex justify-center items-center ">
                <div
                  className="cursor-pointer text-[24px]"
                  onClick={() => setBannerOpen(false)}
                >
                  <AiFillCloseCircle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex text-center flex-col justify-center items-center h-full w-full bg-black/40 space-y-3 p-[10px]">
        <h1 className="text-primary-yellow font-bold text-[30px] laptop:text-[50px]">
          Mobile Speech Therapy Sydney
        </h1>
        <h2 className="text-white font-bold text-[20px] laptop:text-[30px]">
          Speak to Succeed
        </h2>
        <h3 className="text-white text-[12px] laptop:text-[20px]">
          Access speech pathology for children (1 - 18yrs old)
        </h3>
        <div className="text-center space-x-5">
          <Button
            variant="standard"
            onClick={() => {
              router.push(getRouteFromNavItem("Services")).then((r) => {
                dispatch(setSelectedTab("Services"));
                dispatch(setMobileMenuOpen(false));
              });
            }}
            icon={<GiClick />}
          >
            Read more
          </Button>
          <Button
            variant="booking"
            onClick={() => {
              router.push(getRouteFromNavItem("Enquire Now")).then((r) => {
                dispatch(setSelectedTab("Enquire Now"));
                dispatch(setMobileMenuOpen(false));
                fbq.event("View Enquiry Section", {});
              });
            }}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
});

Banner.displayName = "Home";

export default Banner;
