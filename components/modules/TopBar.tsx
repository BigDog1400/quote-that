import { Box, HStack, Spacer } from "@chakra-ui/layout";
import React from "react";
import InputSearchTopBar from "../elements/InputSearchTopBar";
import Logotipo from "../elements/Logotipo";
import ToggleColorMode from "../elements/ToggleColorMode";
import HomeLink from "./HomeLink";

function TopBar() {
  return (
    <HStack justifyContent='flex-end' paddingTop={4} paddingBottom={8}>
      <HomeLink></HomeLink>
      <Spacer
        d={{
          base: "none",
          md: "inherit"
        }}
      ></Spacer>
      <InputSearchTopBar />
      <ToggleColorMode />
    </HStack>
  );
}

export default TopBar;
