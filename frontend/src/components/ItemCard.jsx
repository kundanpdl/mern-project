import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { useItemsStore } from "../store/items";

const ItemCard = ({ item }) => {
  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("white", "gray.800");

  const { deleteItem } = useItemsStore();
  const toast = useToast();
  const handleDeleteItem = async (id) => {
    const { success, message } = await deleteItem(id);
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
  };
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", shadow: "xl" }}
      bg={bgColor}
    >
      <Image
        src={item.image}
        alt={item.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="lg" mb={2} fontWeight="bold">
          {item.name}
        </Heading>
        <Text fontSize="xl" textColor={textColor}>
          ${item.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDeleteItem(item._id)}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ItemCard;
