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
export const theme = extendTheme({
  config,
  layerStyles: {
    cardDarkMode: {
      bg: "gray.600",
      color: "gray.50",
      transition: "all 0.3s ease",
      _hover: {
        bg: "gray.700",
        cursor: "pointer",
        transform: "scale(1.015)"
      }
    },
    cardLightMode: {
      bg: "gray.50",
      color: "gray.800",
      transition: "all 0.3s ease",
      _hover: {
        bg: "gray.100",
        cursor: "pointer",
        transform: "scale(1.015)"
      }
    }
  }
});
