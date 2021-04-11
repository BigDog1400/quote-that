import React from "react";
import TrackDetailsSkeleton from "../elements/TrackDetailsSkeleton";
import TrackDetailsResult from "../modules/TrackDetailsResult";

type TrackResultProps = {
  idAlbum: string;
  idTrack: string;
  idArtist: string;
};

function Track({ idAlbum, idTrack, idArtist }: TrackResultProps) {
  return (
    <TrackDetailsResult
      idAlbum={idAlbum}
      idTrack={idTrack}
      idArtist={idArtist}
    ></TrackDetailsResult>
  );
}

export default Track;
