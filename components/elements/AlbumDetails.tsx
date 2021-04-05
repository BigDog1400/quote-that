import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";

type AlbumsDetailsProps = {
  cover: string;
  album: string;
  artist: string;
  realease: string;
};

function AlbumDetails({ cover, album, artist, realease }: AlbumsDetailsProps) {
  return (
    <Flex spacing='4'>
      <Image src={cover} height='200px'></Image>
      <Box paddingLeft='2rem'>
        <Heading>{album}</Heading>
        <Text fontSize='2xl'>{artist}</Text>
        {realease ? <Text fontSize='sm'>Realease Date: {realease}</Text> : null}
      </Box>
    </Flex>
  );
}

export default AlbumDetails;
