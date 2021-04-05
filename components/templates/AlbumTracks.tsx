import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import AlbumDetails from "../elements/AlbumDetails";
import AlbumTrackListResult from "../modules/AlbumTrackListResult";

type AlbumTracksProps = {
  idArtist: number;
  idAlbum: number;
};

function AlbumTracks({ idArtist, idAlbum }: AlbumTracksProps) {
  return (
    <>
      <AlbumDetails idAlbum={String(idAlbum)} idArtist={String(idArtist)} />
      <Center>
        <AlbumTrackListResult idAlbum={idAlbum} idArtist={idArtist} />
      </Center>
    </>
  );
}

export default AlbumTracks;
