import { Box, Center, Stack } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../lib/reduxHooks";
import {
  resultArtists,
  statusSearchArtists
} from "../../lib/slices/artistSlice";
import ArtistResultItem from "../elements/ArtistResultItem";
import LoadingSpinner from "../elements/LoadingSpinner";

function ArtistListResult() {
  const artistList = useAppSelector(resultArtists);
  const status = useAppSelector(statusSearchArtists);
  return (
    <Stack w='100%' spacing='1rem'>
      {status === "loading" ? (
        <Center>
          <LoadingSpinner></LoadingSpinner>
        </Center>
      ) : artistList.length > 0 ? (
        artistList.map((artist) => (
          <ArtistResultItem
            artistName={artist.artist}
            profilePictureURL={artist.cover}
          ></ArtistResultItem>
        ))
      ) : null}
    </Stack>
  );
}

export default ArtistListResult;
