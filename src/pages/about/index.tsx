import type { NextPage } from "next";
import Layout from "src/components/Layout";
import Section from "src/components/Section";
import AboutUs from "./AboutUs";

const styles = {};

const About: NextPage = () => {
  return (
    <Section title="About Us">
      <AboutUs />
    </Section>
  );
};

export default About;
