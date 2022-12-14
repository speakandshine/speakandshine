import type { NextPage } from "next";
import Layout from "src/components/Layout";
import Section from "src/components/Section";
import DeliveryMethods from "./DeliveryMethods";

const styles = {};

const Delivery: NextPage = () => {
  return (
    <Section title="Delivery Methods">
      <DeliveryMethods />
    </Section>
  );
};

export default Delivery;
