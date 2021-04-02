// 1. import `extendTheme` function
import { ColorMode, extendTheme } from "@chakra-ui/react"; // 2. Add your color mode config

export interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const config: ChakraConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

// 3. extend the
const theme = extendTheme({
  config,
  layerStyles: {
    cardDarkMode: {
      bg: "gray.600",
      color: "gray.50"
    },
    cardLightMode: {
      bg: "gray.50",
      color: "gray.800"
    }
  }
});

export default theme;
