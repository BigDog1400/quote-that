import { VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchTrack,
  resultTrack,
  statusSearchTrack
} from "../../lib/slices/trackSlice";
import LyricsSkeleton from "../elements/LyricsSkeleton";
import LyricsView from "../elements/LyricsView";
import TrackDetails from "../elements/TrackDetails";
import TrackDetailsSkeleton from "../elements/TrackDetailsSkeleton";

type TrackDetailsResultProps = {
  idAlbum: string;
  idTrack: string;
  idArtist: string;
};

function TrackDetailsResult({
  idAlbum,
  idTrack,
  idArtist
}: TrackDetailsResultProps) {
  const dispatch = useAppDispatch();
  const trackInfo = useAppSelector(resultTrack);
  const statusFetch = useAppSelector(statusSearchTrack);
  useEffect(() => {
    dispatch(
      fetchTrack({
        idAlbum,
        idTrack,
        idArtist
      })
    );
  }, [idAlbum, idTrack, idArtist]);

  if (statusFetch === "idle" || statusFetch === "loading")
    return (
      <VStack marginBottom='2rem' marginTop='2rem' spacing='3rem'>
        <TrackDetailsSkeleton></TrackDetailsSkeleton>
        <LyricsSkeleton></LyricsSkeleton>
      </VStack>
    );

  if (statusFetch === "succeeded")
    return (
      <VStack marginBottom='2rem' marginTop='2rem' spacing='3rem'>
        <TrackDetails
          coverURL={trackInfo.cover}
          trackName={trackInfo.track}
          artistName={trackInfo.artist}
          albumName={trackInfo.album}
        ></TrackDetails>
        <LyricsView lyrics={trackInfo.lyrics} />
      </VStack>
    );

  if (statusFetch === "failed") return <span>No encontramos registros</span>;
}

export default TrackDetailsResult;
