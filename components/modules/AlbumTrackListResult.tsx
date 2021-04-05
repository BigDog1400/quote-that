import { useColorMode } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchTracks,
  resultTracks,
  statusSearchTracks
} from "../../lib/slices/tracksSlice";
import TrackResultItem from "../elements/TrackResultItem";
type AlbumTrackListResultProps = {
  idArtist: number;
  idAlbum: number;
};

function AlbumTrackListResult({
  idArtist,
  idAlbum
}: AlbumTrackListResultProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchTracks({
        id_artist: String(idArtist),
        id_album: String(idAlbum)
      })
    );
  }, [idArtist, idAlbum]);
  const albumTracksResult = useAppSelector(resultTracks);
  const fetchStatus = useAppSelector(statusSearchTracks);
  const { colorMode } = useColorMode();
  return (
    <>
      {fetchStatus === "loading" ? <span>Cargando</span> : null}

      {fetchStatus === "succeeded" && albumTracksResult?.tracks.length > 0 ? (
        <VStack
          w={{
            base: "90%",
            md: "60%"
          }}
          spacing='1rem'
        >
          {albumTracksResult?.tracks.map((track, index) => (
            <TrackResultItem
              key={index}
              trackNumber={index + 1}
              trackName={track.track}
              colorMode={colorMode}
              lang={track.lang}
              lyrics={track.haslyrics}
              bpm={track.bpm}
            />
          ))}
        </VStack>
      ) : null}

      {fetchStatus === "succeeded" && albumTracksResult?.tracks.length < 1 ? (
        <span>Sin resultados</span>
      ) : null}
    </>
  );
}

export default AlbumTrackListResult;
