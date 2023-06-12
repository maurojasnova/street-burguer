"use client";

import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box py={8} maxW="800px" mx="auto" px={{ base: 4, md: 0 }}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} align="center" py={12}>
        Sobre nosotros
      </Text>
      <Stack>
        <Text fontSize="2xl" mb={4} align="center">
          El origen
        </Text>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Text
            mt={{ base: 4, md: 0 }}
            ml={{ md: 4 }}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
          >
            Street Burguer, sabroso para llevar, nace en Villena el 2 de
            septiembre del 2019, meses antes de la pandemia por el corona virus.
            Casi por casualidad da a luz este proyecto y por deseos de traer los
            sabores latinos de la comida callejera a Villena., de ahí el nombre
            que combina la palabra en Ingles Street y la castellanización del
            vocablo Burger para formar el nombre hamburguesa de calle y nuestro
            deseo ya que desde un principio nacimos con vocación de servicio a
            domicilio “sabroso para llevar”.
          </Text>
          <Image
            src="/Images/primer_local.jpg"
            alt="Image 1"
            borderRadius="md"
            boxSize={{ base: "100%", md: "300px" }}
            mb={24}
          />
        </Flex>

        <Text fontSize="2xl" mb={8} align="center">
          La expansión
        </Text>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Image
            src="/Images/terraza.jpg"
            alt="Image 2"
            borderRadius="md"
            boxSize={{ base: "100%", md: "300px" }}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 24 }}
          />
          <Text mt={{ base: 4, md: 0 }} ml={{ md: 4 }} mb={24}>
            Realizando una hamburguesa totalmente casera elaborada con nuestra
            receta y con mucha ilusión fuimos dando pasos y conforme ha ido
            aumentando nuestra clientela han ido aumentando nuestras
            necesidades, pasando de un pequeño local donde no había mas que una
            ventana y una barra para recoger y llevar pedidos a un local mucho
            mas amplio con la posibilidad de quedarse a cenar y una estupenda
            terraza donde disfrutar de nuestra comida.
          </Text>
        </Flex>

        <Text fontSize="2xl" mb={8} align="center">
          Un gran menú
        </Text>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Text
            mt={{ base: 4, md: 0 }}
            ml={{ md: 4 }}
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
          >
            Nuestra carta no ha parado de crecer desde que nacimos y a la
            extensa variedad de hamburguesas que ofrecemos se le han ido sumando
            otros productos como los hots dogs tan relacionados con la comida
            rápida y de calle como a los distintos sabores latinos de las
            arepas, patacones, carnes sazonadas etc.
          </Text>
          <Image
            src="/Images/local_antiguo.jpg"
            alt="Image 3"
            borderRadius="md"
            boxSize={{ base: "100%", md: "300px" }}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default AboutSection;
