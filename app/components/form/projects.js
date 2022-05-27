import React from "react";
import Head from "next/head";
import {
  Button,
  Input,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  useColorModeValue,
  Heading,
  Center,
  Textarea,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepAtom } from "../../atoms/step-atom";
import { useFormik } from "formik";
import { projectListAtom } from "../../atoms/college-resume-atom";

const Projects = () => {
  //atoms initiate
  const setStep = useSetRecoilState(stepAtom);
  const [projectList, setProjectList] = useRecoilState(projectListAtom);

  //form initiate
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    onSubmit: () => {
      setStep(4);
    },
  });

  //project list component
  const ProjectList = () => {
    return (
      <Stack
        spacing={4}
        w={"40%"}
        maxW={"40%"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        m={6}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "xl", md: "2xl" }}>
          Projects
        </Heading>
        {projectList.map((project, index) => {
          return (
            <Container
              key={index}
              bgColor={"red"}
              bg={useColorModeValue("whitesmoke", "gray.700")}
              rounded={"xl"}
              p={6}
            >
              <b>{project.title}</b>
              <br></br>
              {project.desc}
            </Container>
          );
        })}
      </Stack>
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>Step 3: Projects</title>
      </Head>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"50%"}
          maxW={"50%"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <IconButton
            w={"40px"}
            bgColor={"transparent"}
            aria-label="Add Project"
            size="lg"
            onClick={() => {
              setStep(2);
            }}
            icon={<ArrowBackIcon />}
          />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Add Projects 📚
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="title">
              <FormLabel>Project Title</FormLabel>
              <Input
                placeholder="My Project"
                _placeholder={{ color: "gray.500" }}
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && (
                <h3 style={{ color: "red" }}>{formik.errors.title}</h3>
              )}
            </FormControl>
            <FormControl id="desc" paddingTop={"10px"}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Tell us about your project...."
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.desc && (
                <h3 style={{ color: "red" }}>{formik.errors.desc}</h3>
              )}
            </FormControl>

            <Stack spacing={6} paddingTop={"10px"}>
              <Center>
                <IconButton
                  aria-label="Add Project"
                  size="lg"
                  icon={<AddIcon />}
                  onClick={() => {
                    if (
                      formik.values.title.length > 0 &&
                      formik.values.desc.length > 0
                    ) {
                      const project = {
                        title: formik.values.title,
                        desc: formik.values.desc,
                      };
                      setProjectList([...projectList, project]);
                      formik.resetForm();
                    }
                  }}
                />
              </Center>
              <Stack spacing={6} paddingTop={"50px"}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                >
                  Next Step: Add Skills
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
        <br></br>
        <ProjectList />
      </Flex>
    </React.Fragment>
  );
};
export default Projects;
