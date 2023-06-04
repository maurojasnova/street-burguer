import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt="auto"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} Street Burguer. Todos los derechos
          reservados
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Link
            href="https://www.facebook.com/profile.php?id=100063743344193"
            isExternal
          >
            <IconButton
              aria-label="facebook"
              bg="gray.50"
              _hover={{ bg: "gray.50" }}
              variant="ghost"
              size="lg"
              isRound={true}
              icon={<MdFacebook size="28px" />}
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
