import { Avatar } from "@chakra-ui/avatar";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";

type AvatarWithNameProps = {
  name: string;
  urlAvatar: string;
};

function AvatarWithName({ name, urlAvatar }: AvatarWithNameProps) {
  const { colorMode } = useColorMode();
  return (
    <VStack spacing='2rem'>
      <Box height='200px' w='200px'>
        <Avatar
          showBorder
          borderColor={colorMode === "dark" ? "white" : "black"}
          size='full'
          name={name}
          src={urlAvatar}
        />
      </Box>
      <Heading marginTop='1rem !important'>{name}</Heading>
    </VStack>
  );
}

export default AvatarWithName;
