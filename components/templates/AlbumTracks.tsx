import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
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
    <>
      <AlbumDetailsResult idAlbum={idAlbum} idArtist={idArtist} />
      <Center>
        <AlbumTrackListResult idAlbum={idAlbum} idArtist={idArtist} />
      </Center>
    </>
  );
}

export default AlbumTracks;
