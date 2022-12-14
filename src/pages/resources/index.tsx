import type { NextPage } from "next";
import Section from "src/components/Section";
import ResourcesContent from "./Resources";

const styles = {};

const Resources: NextPage = () => {
  return (
    <Section title="Resources">
      <ResourcesContent />
    </Section>
  );
};

export default Resources;
