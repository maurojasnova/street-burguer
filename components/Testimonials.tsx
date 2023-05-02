import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name
}: {
  src: string;
  name: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Nuestros clientes hablan</Heading>
          <Text>
            Nosotros llevamos una fusión gastronómico por todo Villena y sus
            alrededores
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Hamburguesas buenas</TestimonialHeading>
              <TestimonialText>
                Cené allí anoche y la verdad es que terminé muy contenta. Las
                hamburguesas estaban muy buenas. Lo que también me gustó es que
                por dos euros más (al precio de la hamburguesa) podías pedirte
                patata y bebida. Probé por primera vez las arepas y la masa estaba muy crujiente, lo que siempre es positivo.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"Images/male_user.png"}
              name={"Mariángeles Olivares Poveda"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Comida recién hecha</TestimonialHeading>
              <TestimonialText>
                Anoche cenamos con mi familia aquí y nos encantó la comida, la
                atención muy buena y todo estaba muy delicioso, siendo sincero
                prefiero comer en el lugar que sale la comida caliente y recién
                hecha a pedir a domicilio, en conclusión nos gusto mucho y lo
                recomendamos como el mejor lugar de hamburguesas de Villena.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"Images/male_user.png"}
              name={"Jerson Fernandez"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Carta variada</TestimonialHeading>
              <TestimonialText>
                He estado hoy a medio día con la familia... Y la verdad es que
                hemos salido muy contentos. El local es de reciente apertura
                (antes estaban en otro sitio). La carta es muy variada. El trato
                es bastante bueno. Y la comida se ve de calidad y con una
                excelente relación con respecto al precio. Muy recomendable.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"Images/male_user.png"}
              name={"Daniel Moreno Puntero"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
