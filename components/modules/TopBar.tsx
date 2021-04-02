import { HStack } from "@chakra-ui/layout";
import React from "react";
import InputSearchTopBar from "../elements/InputSearchTopBar";
import ToggleColorMode from "../elements/ToggleColorMode";

function TopBar() {
  return (
    <HStack
      justifyContent='flex-end'
      spacing='4'
      paddingTop={4}
      paddingBottom={8}
    >
      <InputSearchTopBar />
      <ToggleColorMode />
    </HStack>
  );
}

export default TopBar;
