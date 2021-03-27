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
  config
});

export default theme;
