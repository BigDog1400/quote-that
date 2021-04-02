import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='Change color mode'
      icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    />
  );
}

export default ToggleColorMode;
