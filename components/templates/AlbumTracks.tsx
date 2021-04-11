import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import AlbumDetails from "../elements/AlbumDetails";
import AlbumDetailsResult from "../modules/AlbumDetailsResult";
import AlbumTrackListResult from "../modules/AlbumTrackListResult";

type AlbumTracksProps = {
  idArtist: number;
  idAlbum: number;
};

function AlbumTracks({ idArtist, idAlbum }: AlbumTracksProps) {
  return (
    <Stack spacing='3rem' marginTop='2rem' marginBottom='4rem'>
      <AlbumDetailsResult idAlbum={idAlbum} idArtist={idArtist} />
      <Center mt={4}>
        <AlbumTrackListResult idAlbum={idAlbum} idArtist={idArtist} />
      </Center>
    </Stack>
  );
}

export default AlbumTracks;
