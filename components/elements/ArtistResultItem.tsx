import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";

type ArtistResultItemProps = {
  artistName: string;
  profilePictureURL: string;
};

function ArtistResultItem({
  artistName,
  profilePictureURL
}: ArtistResultItemProps) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      height='80px'
      layerStyle={colorMode === "dark" ? "cardDarkMode" : "cardLightMode"}
      width='100%'
      borderRadius='md'
      p={5}
      alignItems='center'
    >
      {artistName}
      <Spacer></Spacer>
      <Image
        borderRadius='full'
        boxSize='60px'
        alt='Artist Cover'
        fallbackSrc='img/mello-face.png'
        src={profilePictureURL}
      />
    </Flex>
  );
}

export default ArtistResultItem;
