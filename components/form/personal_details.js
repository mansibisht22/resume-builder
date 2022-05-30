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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  emailAtom,
  nameAtom,
  phoneAtom,
} from "../../atoms/college-resume-atom";
import { stepAtom } from "../../atoms/step-atom";

const PersonalDetails = (props) => {
  //atoms initiate
  const setStep = useSetRecoilState(stepAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [phone, setPhone] = useRecoilState(phoneAtom);

  //form initiate
  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      phone: phone,
    },
    onSubmit: () => {
      formik
        .validateForm()
        .then(() => {
          setName(formik.values.name);
          setEmail(formik.values.email);
          setPhone(formik.values.phone);
          setStep(2);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //form validation
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      phone: yup.string().phone().required("Phone Number is required"),
    }),
  });

  return (
    <React.Fragment>
      <Head>
        <title>Step 1: Personal Details</title>
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
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Tell us about You 🥰
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="John Doe"
                _placeholder={{ color: "gray.500" }}
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && (
                <h3 style={{ color: "red" }}>{formik.errors.name}</h3>
              )}
            </FormControl>{" "}
            <FormControl id="email" paddingTop={"10px"}>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                placeholder="johndoe@email.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <h3 style={{ color: "red" }}>{formik.errors.email}</h3>
              )}
            </FormControl>
            <FormControl id="phone" paddingTop={"10px"}>
              <FormLabel>Phone</FormLabel>
              <Input
                id="phone"
                placeholder="10 Digit Mobile Number"
                _placeholder={{ color: "gray.500" }}
                // type="number"

                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && (
                <h3 style={{ color: "red" }}>{formik.errors.phone}</h3>
              )}
            </FormControl>
            <Stack spacing={6} paddingTop={"50px"}>
              <Button
                // type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Next Step: Add Education {props.step}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};
export default PersonalDetails;
