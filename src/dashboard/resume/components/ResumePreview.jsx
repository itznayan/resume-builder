import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetail from "./preview/PersonalDetail";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="shadow-lg">
      {/* Personal Detail */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Summery */}
      {/* Professional Experience */}
      {/* Educational */}
      {/* {Skills} */}
    </div>
  );
};

export default ResumePreview;
