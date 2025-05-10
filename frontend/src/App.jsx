import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box height={"100vh"} bg={useColorModeValue("gray.200", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createPage" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
