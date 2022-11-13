import type { NextPage } from "next";
import { useRef } from "react";
import { useIntersection } from "src/shared/helpers/viewport";
import { scrollToSection } from "src/shared/helpers/scroll";

import Layout from "src/shared/components/Layout";
import Section from "src/shared/components/Section";
import Services from "./components/Services";
import DeliveryMethods from "./components/DeliveryMethods";
import FeesAndFunding from "./components/FeesAndFunding";
import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import BookSession from "./components/BookSession";
import Button from "src/shared/components/Button";
import Home from "./components/Home";

const Root: NextPage = () => {
  const homeRef = useRef();
  const s1Ref = useRef();
  const s2Ref = useRef();
  const s3Ref = useRef();
  const s4Ref = useRef();
  const s5Ref = useRef();
  const s6Ref = useRef();

  const homeInView = useIntersection(homeRef, "-50%");
  const s1InView = useIntersection(s1Ref, "-50%");
  const s2InView = useIntersection(s2Ref, "-50%");
  const s3InView = useIntersection(s3Ref, "-50%");
  const s4InView = useIntersection(s4Ref, "-50%");
  const s5InView = useIntersection(s5Ref, "-50%");
  const s6InView = useIntersection(s6Ref, "-50%");

  const sections = [
    {
      title: "Home",
      ref: homeRef,
      inView: homeInView,
    },
    {
      title: "About Us",
      ref: s1Ref,
      inView: s1InView,
    },
    {
      title: "Services",
      ref: s2Ref,
      inView: s2InView,
    },
    {
      title: "Delivery Methods",
      ref: s3Ref,
      inView: s3InView,
    },
    {
      title: "Fees and Funding",
      ref: s4Ref,
      inView: s4InView,
    },
    {
      title: "Resources / FAQs",
      ref: s5Ref,
      inView: s5InView,
    },
    {
      title: "Book a Session",
      ref: s6Ref,
      inView: s6InView,
    },
  ];

  return (
    <Layout sections={sections}>
      {/* BOOKING REQUEST FLOATING BUTTON */}
      <div className="laptop:hidden">
        <Button
          variant="booking"
          floating
          onClick={() => scrollToSection(sections[6].ref)}
        >
          Book a Session
        </Button>
      </div>

      <Home ref={homeRef} servicesRef={s2Ref} bookSessionRef={s6Ref} />
      {/* CONTENT SECTIONS */}
      <div>
        <Section title={sections[1].title} ref={s1Ref}>
          <AboutUs />
        </Section>
        <Section title={sections[2].title} ref={s2Ref}>
          <Services bookSessionRef={s6Ref} />
        </Section>
        <Section title={sections[3].title} ref={s3Ref}>
          <DeliveryMethods bookSessionRef={s6Ref} />
        </Section>
        <Section title={sections[4].title} ref={s4Ref}>
          <FeesAndFunding bookSessionRef={s6Ref} />
        </Section>
        <Section title={sections[5].title} ref={s5Ref}>
          <Resources />
        </Section>
        <Section title={sections[6].title} ref={s6Ref}>
          <BookSession ref={s6Ref} />
        </Section>
      </div>
    </Layout>
  );
};

export default Root;
