import type { NextPage } from "next";
import Section from "src/components/Section";
import FAQsContent from "./FAQs";

const styles = {};

const FAQs: NextPage = () => {
  return (
    <Section title="Frequently Asked Questions (FAQs)">
      <FAQsContent />
    </Section>
  );
};

export default FAQs;
