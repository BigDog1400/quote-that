import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
type AlbumResultItemProps = {
  coverAlbumUrl: string;
  nameAlbum: string;
  idAlbum: string;
  idArtist: string;
};

function AlbumResultItem({
  coverAlbumUrl,
  nameAlbum,
  idArtist,
  idAlbum
}: AlbumResultItemProps) {
  const { colorMode } = useColorMode();
  return (
    <Link href={`/artist/${idArtist}/album/${idAlbum}`}>
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
    </Link>
  );
}

export default AlbumResultItem;
