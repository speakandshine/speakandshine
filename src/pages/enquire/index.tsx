import type { NextPage } from "next";
import Section from "src/components/Section";
import BookSession from "./BookSession";

const styles = {};

const Enquire: NextPage = () => {
  return (
    <Section title="Enquire Now">
      <BookSession />
    </Section>
  );
};

export default Enquire;
