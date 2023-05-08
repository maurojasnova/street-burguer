"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsInstagram, BsPerson } from "react-icons/bs";
import { useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();

  function onSubmit(values) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="orange.300"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} align={"center"}>
              <WrapItem>
                <Box>
                  <Heading>Contáctanos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    Llena el siguiente formulario
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                      justify={"center"}
                    >
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +34 965 80 08 30
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        strburguer@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Av Constitución, Villena
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                    justify={"center"}
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsInstagram size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <VStack spacing={5}>
                        <FormControl isInvalid={Boolean(errors.name)}>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>

                            <Input
                              type="text"
                              size="md"
                              id="name"
                              {...register("name", {
                                required: "This is required",
                                minLength: {
                                  value: 4,
                                  message: "Minimum length should be 4",
                                },
                              })}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {errors.name && errors.name.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={Boolean(errors.email)}>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              id="email"
                              {...register("email", {
                                required: "This is required",
                                minLength: {
                                  value: 4,
                                  message: "Minimum length should be 4",
                                },
                              })}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {errors.email && errors.email.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={Boolean(errors.message)}>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            id="message"
                            {...register("message", {
                              required: "This is required",
                              minLength: {
                                value: 4,
                                message: "Minimum length should be 4",
                              },
                            })}
                          />
                          <FormErrorMessage>
                            {errors.message && errors.message.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            type="submit"
                            isLoading={isSubmitting}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
