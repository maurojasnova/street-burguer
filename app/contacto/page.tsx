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
  Link,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
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

  const onSubmit = async (data) => {
    fetch("/api/submit-contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert(JSON.stringify(data));
  };

  return (
    <Container bg="white" maxW="full"  centerContent overflow="hidden">
      <Flex>
        <Box
          bg="orange.300"
          color="gray.800"
          borderRadius="lg"
          m={{ sm: 16, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 5, md: 5, lg: 20 }} align={"center"}>
              <WrapItem>
                <Box>
                  <Heading>Contáctanos</Heading>
                  <Box py={{ base: 3, sm: 4, md: 4, lg: 10 }}>
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
                        bg="orange.300"
                        _hover={{ bg: "orange.300" }}
                        variant="ghost"
                        cursor="default"
                        leftIcon={<MdPhone color="#000000" size="20px" />}
                      >
                        +34 965 80 08 30
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        bg="orange.300"
                        _hover={{ bg: "orange.300" }}
                        variant="ghost"
                        cursor="default"
                        leftIcon={<MdEmail color="#000000" size="20px" />}
                      >
                        strburguer@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        bg="orange.300"
                        _hover={{ bg: "orange.300" }}
                        variant="ghost"
                        cursor="default"
                        leftIcon={<MdLocationOn color="#000000" size="20px" />}
                      >
                        Av Constitución, Villena
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={4} color="#0B0E3F">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <VStack spacing={5}>
                        <FormControl isInvalid={Boolean(errors.name)}>
                          <FormLabel>Tu nombre</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>

                            <Input
                              type="text"
                              size="md"
                              id="name"
                              {...register("name", {
                                required: "Esto es requerido",
                                minLength: {
                                  value: 4,
                                  message: "Longitud mínima de 4 caracteres",
                                },
                              })}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {errors.name && errors.name.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={Boolean(errors.email)}>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              id="email"
                              {...register("email", {
                                required: "Esto es requerido",
                                minLength: {
                                  value: 4,
                                  message: "Longitud mínima de 4 caracteres",
                                },
                              })}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {errors.email && errors.email.message}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={Boolean(errors.message)}>
                          <FormLabel>Mensaje</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            id="message"
                            {...register("message", {
                              required: "Esto es requerido",
                              minLength: {
                                value: 4,
                                message: "Longitud mínima de 4 caracteres",
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
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            bg="orange.300"
                            color="white"
                            _hover={{ bg: "orange.500" }}
                            type="submit"
                            isLoading={isSubmitting}
                          >
                            Enviar mensaje
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
