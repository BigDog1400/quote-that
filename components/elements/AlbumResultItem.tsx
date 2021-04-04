import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Text, VStack } from "@chakra-ui/layout";
import React from "react";

type AlbumResultItemProps = {
  coverAlbumUrl: string;
  nameAlbum: string;
};

function AlbumResultItem({ coverAlbumUrl, nameAlbum }: AlbumResultItemProps) {
  const { colorMode } = useColorMode();

  return (
    <VStack
      p={4}
      backgroundColor='gray.200'
      display='flex'
      flexFlow='column'
      spacing='0.5rem'
      layerStyle={colorMode === "dark" ? "cardDarkMode" : "cardLightMode"}
      height='200px'
      width='200px'
    >
      <Image
        _hover={{
          cursor: "pointer"
        }}
        src={coverAlbumUrl}
        height={"120px"}
      ></Image>
      <Text
        maxW='160px'
        textAlign='center'
        isTruncated={true}
        _hover={{
          cursor: "pointer"
        }}
      >
        {nameAlbum}
      </Text>
    </VStack>
  );
}

export default AlbumResultItem;
