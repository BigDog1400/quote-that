import { IconButton } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import MusicIcon from "./MusicIcon";

function Logotipo() {
  return (
    <>
      <Box
        _hover={{
          cursor: "pointer"
        }}
        d={{
          base: "none",
          md: "block"
        }}
      >
        <Text textStyle='logotipo' fontSize='1.5rem'>
          Quote That
        </Text>
      </Box>
      <Box
        _hover={{
          cursor: "pointer"
        }}
        d={{
          base: "block",
          md: "none"
        }}
      >
        <IconButton
          aria-label='Home Icon'
          icon={
            <MusicIcon
              style={{
                height: "20px",
                width: "20px"
              }}
            />
          }
        ></IconButton>
      </Box>
    </>
  );
}

export default Logotipo;
