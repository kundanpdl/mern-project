import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { useItemsStore } from "../store/items";

const CreatePage = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createItem } = useItemsStore();
  const handleCreateItem = async () => {
    const { success, message } = await createItem(newItem);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setNewItem({
      name: "",
      price: "",
      image: "",
    });
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
