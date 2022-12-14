import ResourceSection from "./ResourceSection";
import Resource from "./Resource";

export interface IResourcesProps {}

const Resources = (props: IResourcesProps) => {
  return (
    <>
      <div className="flex flex-col laptop:grid laptop:grid-cols-2 space-y-[15px] laptop:space-y-0">
        <ResourceSection title="Language">
          <Resource
            title="Communication Milestone factsheet"
            description="Stages of speech development from 0 - 5yrs."
            type="pdf"
            resource="language/1_Communication_Milestones_factsheet"
          />
          <Resource
            title="Speech pathology in mental health services"
            description="How speech pathology may help some mental health issues."
            type="pdf"
            resource="language/2_Speech_pathology_in_mental_health_services"
          />
          <Resource
            title="Raising Bilingual children"
            description="Most children are able to learn two (or more) languages at the
                same time without difficulty."
            type="pdf"
            resource="language/3_Raising_Bilingual_children"
          />
          <Resource
            title=" Helping your Baby to talk"
            description="Every baby learns to speak by listening, playing with sounds and
                talking to others."
            type="pdf"
            resource="language/4_Helping_your_Baby_to_talk"
          />
          <Resource
            title="Helping your Baby to talk"
            description="Parent information/ parent guide."
            type="pdf"
            resource="language/5_Helping_your_Baby_to_talk_Parent_Guide"
          />
          <Resource
            title="Autism"
            description="A condition that affects the way a person makes sense of, and interacts with, other people and their environment."
            type="pdf"
            resource="language/6_Autism_Spectrum_Disorder"
          />
        </ResourceSection>
        <ResourceSection title="Speech" customClass="bg-secondary-yellow">
          <Resource
            title="The sound of speech"
            description="Stages of speech from 1 - 3 years old."
            type="pdf"
            resource="speech/1_The_Sound_Of_Speech_0_to_3_years"
          />
          <Resource
            title="Learning speech"
            description="Preschool and school aged children stages of speech."
            type="pdf"
            resource="speech/2_Learning_speech"
          />
          <Resource
            title="Speech Pathology and Indigenous children"
            description="Understanding indigenous children in speech therapy."
            type="pdf"
            resource="speech/3_Speech_Pathology_And_Indigenous_Children"
          />
          <Resource
            title="Tongue Tie"
            description="A condition where a person has a short frenulum, or tie, that
                holds the tongue tightly to the floor of the mouth and reduces
                the mobility, flexibility and reach of the tongue."
            type="pdf"
            resource="speech/4_Tongue_Tie"
          />
        </ResourceSection>
        <ResourceSection
          title="Literacy (read and write)"
          customClass="laptop:bg-secondary-yellow"
        >
          <Resource
            title="When should I get help for literacy difficulty?"
            description="Signs of literacy difficulty."
            type="pdf"
            resource="literacy/1_Literacy_Difficulty_Signs"
          />
          <Resource
            title="Learning to read and write"
            description="Reading and writing (literacy) are essential skills for children."
            type="pdf"
            resource="literacy/2_Literacy"
          />
        </ResourceSection>
        <ResourceSection
          title="Fluency / Stuttering"
          customClass="bg-secondary-yellow laptop:bg-white"
        >
          <Resource
            title=" Does my child have a stutter?"
            description="A speech problem that makes it difficult for children to speak
                smoothly."
            type="website"
            resource="https://raisingchildren.net.au/preschoolers/development/language-development/stuttering"
          />
          <Resource
            title="Stuttering and fluency information"
            description=" Stuttering is a speech disorder that causes interruptions in the
                rhythm or flow of speech."
            type="pdf"
            resource="fluencyStuttering/2_Stuttering"
          />
        </ResourceSection>
        <ResourceSection title="Feeding / Swallowing and Voice">
          <Resource
            title="Swallowing"
            description="Babies and children who have trouble swallowing may not take in
                enough nutrients to support growth and brain development."
            type="pdf"
            resource="feedingSwallowingVoice/1_Swallowing"
          />
          <Resource
            title="Voice information"
            description="The human voice provides the basic sound for speech and singing."
            type="pdf"
            resource="feedingSwallowingVoice/2_Voice"
          />
        </ResourceSection>
        <ResourceSection
          title="Fees and Funding"
          customClass="bg-secondary-yellow"
        >
          <Resource
            title="Speech pathology rebates and funded programs"
            description="Programs that assist in the funding of speech pathology services, including Medicare and the National Disability Insurance Scheme (NDIS)."
            type="website"
            resource="https://www.speechpathologyaustralia.org.au/SPAweb/Resources_For_Speech_Pathologists/Professional_Resources/Rebates_and_Funded_Programs/SPAweb/Resources_for_Speech_Pathologists/Medicare/Rebates_and_Funded_Programs.aspx?hkey=3aebffdf-3dcd-45d2-a287-b8fa823911af"
          />
          <Resource
            title="Support and services funded by NDIS"
            description="Supports and services delivered for NDIS participants."
            type="website"
            resource="https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready/supports-and-services-funded-ndis"
          />
          <Resource
            title="Speech pathology code of ethics"
            description="Ethical practices of speech pathologist."
            type="website"
            resource="https://www.speechpathologyaustralia.org.au/SPAweb/Members/Ethics/Code_of_Ethics_2020/SPAweb/Members/Ethics/HTML/Code_of_Ethics_2020.aspx?hkey=a9b5df85-282d-4ba9-981a-61345c399688"
          />
        </ResourceSection>
      </div>
    </>
  );
};

export default Resources;
