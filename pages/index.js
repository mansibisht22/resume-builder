import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import {
  collegeNameAtom,
  courseNameAtom,
  emailAtom,
  graduationYearAtom,
  nameAtom,
  phoneAtom,
  projectListAtom,
  skillListAtom,
} from "../atoms/college-resume-atom";
import { stepAtom } from "../atoms/step-atom";

const Home = () => {
  //router initiate
  const router = useRouter();

  //atoms initiate
  const resetStep = useSetRecoilState(stepAtom);
  const resetName = useSetRecoilState(nameAtom);
  const resetEmail = useSetRecoilState(emailAtom);
  const resetPhone = useSetRecoilState(phoneAtom);
  const resetCollegeName = useSetRecoilState(collegeNameAtom);
  const resetCourseName = useSetRecoilState(courseNameAtom);
  const resetGraduationYear = useSetRecoilState(graduationYearAtom);
  const resetProjectsList = useSetRecoilState(projectListAtom);
  const resetSkillsList = useSetRecoilState(skillListAtom);

  //first build
  useEffect(() => {
    resetStep(1);
    resetName("");
    resetEmail("");
    resetPhone("");
    resetCollegeName("");
    resetCourseName("");
    resetGraduationYear("2022");
    resetProjectsList([]);
    resetSkillsList([]);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Resume Builder</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Build your College<div className={styles.text}>Resume</div>
          {""}
        </h1>
        <br></br>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => router.push("build")}
        >
          Get Started &#8594;
        </Button>
      </main>
    </div>
  );
};

export default Home;
