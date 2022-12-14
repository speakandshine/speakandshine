import type { NextPage } from "next";
import Layout from "src/components/Layout";
import Section from "src/components/Section";
import FeesAndFunding from "./FeesAndFunding";

const styles = {};

const Fees: NextPage = () => {
  return (
    <Section title="Fees and Funding">
      <FeesAndFunding />
    </Section>
  );
};

export default Fees;
