import React, { useState } from "react";
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
  IconButton,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepAtom } from "../../atoms/step-atom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  collegeNameAtom,
  courseNameAtom,
  graduationYearAtom,
} from "../../atoms/college-resume-atom";

const Education = () => {
  // atoms initiate
  const setStep = useSetRecoilState(stepAtom);
  const [collegeName, setCollegeName] = useRecoilState(collegeNameAtom);
  const [courseName, setCourseName] = useRecoilState(courseNameAtom);
  const [graduationYear, setGraduationYear] =
    useRecoilState(graduationYearAtom);

  //form initiate
  const formik = useFormik({
    initialValues: {
      courseName: courseName,
      collegeName: collegeName,
      graduationYear: graduationYear,
    },
    onSubmit: () => {
      formik
        .validateForm()
        .then(() => {
          setCollegeName(formik.values.collegeName);
          setCourseName(formik.values.courseName);
          setStep(3);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //form validation
    validationSchema: yup.object({
      courseName: yup.string().trim().required("Course Name is required"),
      collegeName: yup.string().required("College Name is required"),
    }),
  });

  return (
    <React.Fragment>
      <Head>
        <title>Step 2: Education</title>
      </Head>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"70%"}
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
              setStep(1);
            }}
            icon={<ArrowBackIcon />}
          />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Add Education 📖
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="courseName">
              <FormLabel>Course Name</FormLabel>
              <Input
                id="courseName"
                type="text"
                placeholder="BTech"
                _placeholder={{ color: "gray.500" }}
                value={formik.values.courseName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />{" "}
              {formik.errors.courseName && (
                <h3 style={{ color: "red" }}>{formik.errors.courseName}</h3>
              )}
            </FormControl>
            <FormControl id="collegeName" paddingTop={"10px"}>
              <FormLabel>College Name</FormLabel>
              <Input
                id="collegeName"
                type="text"
                placeholder="Jamia Hamdard University"
                _placeholder={{ color: "gray.500" }}
                value={formik.values.collegeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.collegeName && (
                <h3 style={{ color: "red" }}>{formik.errors.collegeName}</h3>
              )}
            </FormControl>
            <FormControl id="graduationYear" paddingTop={"10px"}>
              <FormLabel>Graduation Year</FormLabel>
              <HStack>
                <PinInput
                  // id="graduationYear"
                  defaultValue="202"
                  isDisabled={true}
                  // onChange={(value) => {
                  //   setGraduationYear(value.toString());
                  // }}
                  // value={formik.values.graduationYear}
                >
                  <PinInputField readOnly={true} />
                  <PinInputField readOnly={true} />
                  <PinInputField readOnly={true} />
                  {/* <PinInputField
                    onChange={(e) => {
                      const year = "202" + e.currentTarget.value.toString();
                      console.log(year);
                      // setGraduationYear(value.toString());
                    }}
                  /> */}
                </PinInput>
                <PinInput
                  id="graduationYear"
                  defaultValue={graduationYear.substring(3, 4)}
                  // isDisabled={true}
                  // onChange={(value) => {
                  //   setGraduationYear(value.toString());
                  // }}
                  // value={formik.values.graduationYear}
                >
                  <PinInputField
                    onChange={(e) => {
                      const year =
                        "202" +
                        e.currentTarget.value.substring(0, 1).toString();
                      setGraduationYear(year);
                    }}
                  />
                </PinInput>
              </HStack>
            </FormControl>
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
                Next Step: Add Projects
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

export default Education;
