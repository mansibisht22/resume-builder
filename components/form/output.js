import Head from "next/head";
import styles from "../../styles/Home.module.css";
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import {
  collegeNameAtom,
  courseNameAtom,
  emailAtom,
  graduationYearAtom,
  nameAtom,
  phoneAtom,
  projectListAtom,
  skillListAtom,
} from "../../atoms/college-resume-atom";
import React from "react";

const FinishedResume = () => {
  //atoms initiate
  const name = useRecoilValue(nameAtom);
  const email = useRecoilValue(emailAtom);
  const phone = useRecoilValue(phoneAtom);
  const college = useRecoilValue(collegeNameAtom);
  const course = useRecoilValue(courseNameAtom);
  const graduationYear = useRecoilValue(graduationYearAtom);
  const projectList = useRecoilValue(projectListAtom);
  const skillList = useRecoilValue(skillListAtom);

  return (
    <React.Fragment>
      <Head>
        <title>{name}'s Resume</title>
      </Head>
      <Flex w={"full"} m="0" minH={"100vh"} className={styles.wrapper}>
        <Stack
          spacing={4}
          w={"full"}
          bg={useColorModeValue("rgba(255,255,255, 0.7)", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={5}
          m={10}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
          >
            {name}
          </Heading>
          <br></br>
          <center>
            <Flex>
              <Container>
                <Text textAlign={"center"} textColor="#24aadb" fontSize={"lg"}>
                  <a href={"mailto:" + email}>
                    📧
                    <br></br>
                    {email}
                  </a>
                </Text>
              </Container>
              <Container>
                <Text textAlign={"center"} textColor="#24aadb" fontSize={"lg"}>
                  <a href={"tel:+91" + phone}>
                    📞
                    <br></br>
                    {phone}
                  </a>
                </Text>
              </Container>
              <Container>
                <Text textAlign={"center"} fontSize={"lg"}>
                  🏫
                  <br></br>
                  {course} @ {college} ({graduationYear})
                </Text>
              </Container>
            </Flex>
          </center>
          <br></br>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontWeight={"semibold"}
          >
            Projects 📚
          </Text>

          <Stack w="full" spacing={10} maxW="100%" justifyContent={"center"}>
            {projectList.map((project, index) => {
              return (
                <center key={index}>
                  <Container bgColor="white" rounded={"xl"}>
                    <Text textAlign={"center"}>
                      <b> {project.title}</b>
                      <br></br>
                      {project.desc}
                    </Text>
                  </Container>
                </center>
              );
            })}
          </Stack>
          <br></br>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontWeight={"semibold"}
          >
            Skills 🤹🏻
          </Text>
          <Flex>
            {skillList.map((skill, index) => {
              return (
                <Container
                  key={index}
                  bgColor="white"
                  rounded={"xl"}
                  m={2}
                  p="2"
                >
                  <Text textAlign={"center"}>{skill}</Text>
                </Container>
              );
            })}
          </Flex>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};
export default FinishedResume;
