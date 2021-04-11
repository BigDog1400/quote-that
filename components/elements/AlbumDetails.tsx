import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";

type AlbumsDetailsProps = {
  cover: string;
  album: string;
  artist: string;
  realease: string;
};

function AlbumDetails({ cover, album, artist, realease }: AlbumsDetailsProps) {
  const router = useRouter();
  const { id_artist } = router.query;
  return (
    <Flex spacing='4'>
      <Image src={cover} height='200px'></Image>
      <Box paddingLeft='2rem'>
        <Heading>{album}</Heading>
        <Text
          _hover={{
            textDecoration: "underline",
            fontStyle: "italic",
            cursor: "pointer"
          }}
          fontSize='2xl'
          onClick={() => router.push("/artist/" + id_artist)}
        >
          {artist}
        </Text>
        {realease ? <Text fontSize='sm'>Realease Date: {realease}</Text> : null}
      </Box>
    </Flex>
  );
}

export default AlbumDetails;
