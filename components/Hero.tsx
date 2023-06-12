import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "orange.300",
                zIndex: -1,
              }}
            >
              Sabroso
            </Text>
            <br />
            <Text as={"span"} color={"orange.300"}>
              para llevar!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Street burguer es un referente en Villena y sus alrededores para los
            que quieran descubrir sabores latinos fusionados con la cultura
            española.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"orange.300"}
              _hover={{ bg: "orange.500" }}
            >
              Descargar Menú
            </Button>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              as={"a"}
              href="/contacto"
            >
              Contacto
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"450px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/Images/moto_fachada.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}