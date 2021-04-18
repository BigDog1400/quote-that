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
import { Head } from "../global/CustomHead";
import TopBar from "../modules/TopBar";

type CommonLayoutProps = {
  displayIlustration?: boolean;
  children: React.ReactNode;
  title: string;
};

export default function CommonLayout({
  children,
  displayIlustration = true,
  title
}: CommonLayoutProps) {
  return (
    <>
      <Head title={title}></Head>
      <Container maxW='container.xl' display='flex' flexFlow='row'>
        <Flex w='100%' direction='column'>
          <TopBar></TopBar>
          {displayIlustration ? (
            <Center marginTop='5vh' marginBottom='5vh'>
              <PlaylistIlustration
                style={{
                  width: "250px",
                  height: "auto"
                }}
              />
            </Center>
          ) : null}
          <Spacer />
          <Box flex={1}>{children}</Box>
        </Flex>
      </Container>
    </>
  );
}
