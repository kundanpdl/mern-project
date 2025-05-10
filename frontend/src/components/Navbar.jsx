import {
  Button,
  chakra,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        align-items={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-r,rgb(208, 168, 9),rgb(255, 0, 195))"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
        >
          <Link to={"/"}>My Buy List 🛍️ </Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/createPage"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
