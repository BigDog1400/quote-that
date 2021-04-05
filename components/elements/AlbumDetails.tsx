import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchAlbum,
  statusSearchAlbum,
  resultAlbum
} from "../../lib/slices/albumSlice";

type AlbumsDetailsProps = {
  idArtist: string;
  idAlbum: string;
};

function AlbumDetails({ idArtist, idAlbum }: AlbumsDetailsProps) {
  const dispatch = useAppDispatch();
  const statusFetch = useAppSelector(statusSearchAlbum);
  const albumData = useAppSelector(resultAlbum);
  useEffect(() => {
    dispatch(
      fetchAlbum({
        id_album: idAlbum,
        id_artist: idArtist
      })
    );
  }, [idArtist, idAlbum]);

  return (
    <Flex spacing='4'>
      <Image src={albumData?.cover} height='200px'></Image>
      <Box paddingLeft='2rem'>
        <Heading>{albumData?.album}</Heading>
        <Text fontSize='2xl'>{albumData?.artist}</Text>
        {albumData?.realease ? (
          <Text fontSize='sm'>Realease Date: {albumData?.realease}</Text>
        ) : null}
      </Box>
    </Flex>
  );
}

export default AlbumDetails;
