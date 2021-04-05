import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";

type ArtistResultItemProps = {
  artistName: string;
  profilePictureURL: string;
  id_Artist: number;
};

function ArtistResultItem({
  artistName,
  profilePictureURL,
  id_Artist
}: ArtistResultItemProps) {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Flex
      onClick={() => router.push(`artist/${id_Artist}`)}
      height='80px'
      layerStyle={colorMode === "dark" ? "cardDarkMode" : "cardLightMode"}
      width='100%'
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
