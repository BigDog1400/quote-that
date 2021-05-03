import { Box } from "@chakra-ui/layout";
import React from "react";
import CommonLayout from "../components/layouts/common";
import ReadLetter from "../components/modules/ReadLetter";

function Read() {
  return (
    <div
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundColor: "white",
        padding: "3vh"
      }}
    >
      <Box border='2px solid black' height='100%' width='100%'>
        <ReadLetter></ReadLetter>
      </Box>
    </div>
  );
}

export default Read;
