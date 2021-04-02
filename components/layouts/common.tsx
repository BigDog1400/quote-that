import { IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Spacer
} from "@chakra-ui/layout";
import React from "react";
import InputSearchTopBar from "../elements/InputSearchTopBar";
import PlaylistIlustration from "../elements/PlaylistIlustration";
import ToggleColorMode from "../elements/ToggleColorMode";
import TopBar from "../modules/TopBar";

type CommonLayoutProps = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Container maxW='container.xl' display='flex' flexFlow='row'>
      <Flex w='100%' direction='column'>
        <TopBar></TopBar>
        <Center marginBottom='5vh'>
          <PlaylistIlustration
            style={{
              width: "250px",
              height: "auto"
            }}
          />
        </Center>
        <Spacer />
        <Box flex={1}>{children}</Box>
      </Flex>
    </Container>
  );
}
