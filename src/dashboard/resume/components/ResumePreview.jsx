import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetail from "./preview/PersonalDetail";
import SummeryPreview from "./preview/SummeryPreview";
import ProExperiencePreview from "./preview/ProExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillPreview from "./preview/SkillPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal Detail */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Summery */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      <ProExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational */}
      <EducationalPreview resumeInfo={resumeInfo} />

      {/* {Skills} */}
      <SkillPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
