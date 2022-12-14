import type { NextPage } from "next";
import Layout from "src/components/Layout";
import Section from "src/components/Section";
import ServicesContent from "./Services";

const styles = {};

const Services: NextPage = () => {
  return (
    <Section title="Services">
      <ServicesContent />
    </Section>
  );
};

export default Services;
