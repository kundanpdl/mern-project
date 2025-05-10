import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemsStore } from "../store/items";
import ItemCard from "../components/ItemCard";

const Homepage = () => {
  const { items, fetchItems } = useItemsStore();
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  console.log("items: ", items);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-r,rgb(208, 168, 9),rgb(255, 0, 195))"
          bgClip="text"
          fontSize={{ base: "28", sm: "33" }}
          fontWeight="extrabold"
        >
          Current Items
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          width={"full"}
        >
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </SimpleGrid>
        {items.length === 0 && (
          <Text fontSize="xl" fontWeight="bold" color="gray.400">
            No Items Found{" "}
            <Link to={"/createPage"}>
              <Text
                as="span"
                color="yellow.600"
                _hover={{ textDecoration: "underline" }}
              >
                Add New Item
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Homepage;
