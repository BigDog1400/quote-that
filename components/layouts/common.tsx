import { Box, Center, Container, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import PlaylistIlustration from "../elements/PlaylistIlustration";

type CommonLayoutProps = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Container maxW='container.xl' display='flex' flexFlow='row'>
      <Flex w='100%' direction='column'>
        <Center marginBottom='5vh' marginTop='5vh'>
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
