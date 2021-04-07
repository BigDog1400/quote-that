import { Flex, VStack } from "@chakra-ui/layout";
import React from "react";
import AlbumListResult from "../modules/AlbumListResult";
import ArtistAvatar from "../modules/ArtistAvatar";

type ArtistDetailsProps = {
  idArtist: string;
};

function ArtistDetails({ idArtist }: ArtistDetailsProps) {
  return (
    <VStack spacing='1.4rem' paddingBottom='2rem' marginTop='1.5rem'>
      <ArtistAvatar idArtist={idArtist} />
      <Flex wrap='wrap' justifyContent='center'>
        <AlbumListResult idArtist={idArtist} />
      </Flex>
    </VStack>
  );
}

export default ArtistDetails;
