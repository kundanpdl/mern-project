import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";

const CreatePage = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleCreateItem = () => {
    console.log("Item Created:", newItem);
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={4}>
        <Heading textAlign={"center"} mb={10}>
          Create New Item
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}>
          <VStack spacing={4} p={4}>
            <Input
              placeholder="Name"
              name="name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              name="image"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({ ...newItem, image: e.target.value })
              }
            />
            <Button
              colorScheme="teal"
              width={"full"}
              onClick={handleCreateItem}
            >
              Create Item
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
