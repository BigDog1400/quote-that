import { Flex, VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchArtist,
  resultArtist,
  statusSearchArtist
} from "../../lib/slices/artistSlice";
import AlbumListResult from "../modules/AlbumListResult";
import ArtistAvatar from "../modules/ArtistAvatar";

type ArtistDetailsProps = {
  idArtist: string;
};

function ArtistDetails({ idArtist }: ArtistDetailsProps) {
  const dispatch = useAppDispatch();
  const artistData = useAppSelector(resultArtist);
  const currentStatusSearchArtist = useAppSelector(statusSearchArtist);

  useEffect(() => {
    dispatch(fetchArtist({ search: idArtist, getAlbums: true }));
  }, [idArtist]);
  return (
    <VStack spacing='2rem'>
      <ArtistAvatar
        urlAvatar={artistData?.cover}
        artistName={artistData?.artist}
        isLoading={
          currentStatusSearchArtist === "loading" ||
          currentStatusSearchArtist === "idle"
        }
      />
      <Flex wrap='wrap' justifyContent='center'>
        <AlbumListResult idArtist={idArtist} />
      </Flex>
    </VStack>
  );
}

export default ArtistDetails;
