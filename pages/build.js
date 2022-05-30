import React from "react";
import PersonalDetails from "../components/form/personal_details";
import Education from "../components/form/education";
import FinishedResume from "../components/form/output";
import Projects from "../components/form/projects";
import Skills from "../components/form/skills";
import { useRecoilValue } from "recoil";
import { stepAtom } from "../atoms/step-atom";

const ResumeForm = () => {
  //step handler component
  const StepHandler = () => {
    //step atom initiate
    const step = useRecoilValue(stepAtom);

    //switch case for current step component
    switch (step) {
      case 1:
        return <PersonalDetails />;
        break;
      case 2:
        return <Education />;
        break;
      case 3:
        return <Projects />;
        break;
      case 4:
        return <Skills />;
        break;
      case 5:
        return <FinishedResume />;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <StepHandler />
    </React.Fragment>
  );
};

export default ResumeForm;
