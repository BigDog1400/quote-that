import { Box, Center, Stack } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../lib/reduxHooks";
import {
  resultArtists,
  statusSearchArtists
} from "../../lib/slices/artistsSlice";
import ArtistResultItem from "../elements/ArtistResultItem";
import ArtistResultItemSkeleton from "../elements/ArtistResultItemSkeleton";
import LoadingSpinner from "../elements/LoadingSpinner";

function ArtistListResult() {
  const artistList = useAppSelector(resultArtists);
  const status = useAppSelector(statusSearchArtists);
  return (
    <Stack w='100%' spacing='1rem'>
      {status === "loading"
        ? Array(3)
            .fill(null)
            .map((e) => <ArtistResultItemSkeleton />)
        : null}

      {status === "succeeded" && artistList.length > 0
        ? artistList.map((artist) => (
            <ArtistResultItem
              id_Artist={artist.id_artist}
              artistName={artist.artist}
              profilePictureURL={artist.cover}
            ></ArtistResultItem>
          ))
        : null}
    </Stack>
  );
}

export default ArtistListResult;
