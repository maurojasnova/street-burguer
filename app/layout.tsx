"use client";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex minHeight={"100vh"} flexDirection={"column"}>
            <Navbar />
            {children}
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
