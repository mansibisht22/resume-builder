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
  IconButton,
  Container,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepAtom } from "../../atoms/step-atom";
import { useFormik } from "formik";
import { skillListAtom } from "../../atoms/college-resume-atom";

const Skills = () => {
  //atoms initiate
  const setStep = useSetRecoilState(stepAtom);
  const [skillList, setSkillList] = useRecoilState(skillListAtom);

  //alert dialog functions
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  //formik initiate
  const formik = useFormik({
    initialValues: {
      skill: "",
    },
  });

  //skill list component
  const SkillList = () => {
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
          Skills 🤹🏻
        </Heading>
        {skillList.map((skill, index) => {
          return (
            <Container
              key={index}
              bgColor={"red"}
              bg={useColorModeValue("whitesmoke", "gray.700")}
              rounded={"xl"}
              p={6}
            >
              {skill}
            </Container>
          );
        })}
      </Stack>
    );
  };

  //alert dialog component
  const FinishDialog = () => {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Finish Editing
              </AlertDialogHeader>

              <AlertDialogBody>
                Do you want to finish editing your resume?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    onClose();
                    setStep(5);
                  }}
                  ml={3}
                >
                  Finish
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>Step 4: Skills</title>
      </Head>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <FinishDialog />
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
              setStep(3);
            }}
            icon={<ArrowBackIcon />}
          />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Add Skills 🤹🏻
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="skill">
              <FormLabel>Skill</FormLabel>
              <Input
                placeholder="Singing"
                _placeholder={{ color: "gray.500" }}
                value={formik.values.skill}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <Stack spacing={6} paddingTop={"10px"}>
              <Center>
                <IconButton
                  aria-label="Add Project"
                  size="lg"
                  onClick={() => {
                    if (formik.values.skill.length > 0) {
                      const skill = formik.values.skill.toString();
                      setSkillList([...skillList, skill]);
                      formik.resetForm();
                    }
                  }}
                  icon={<AddIcon />}
                />
              </Center>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={() => {
                  onOpen();
                }}
              >
                Finish
              </Button>
            </Stack>
          </form>
        </Stack>
        <br></br>
        <SkillList />
      </Flex>
    </React.Fragment>
  );
};
export default Skills;
