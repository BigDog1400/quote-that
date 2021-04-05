import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchAlbum,
  resultAlbum,
  statusSearchAlbum
} from "../../lib/slices/albumSlice";
import AlbumDetails from "../elements/AlbumDetails";
import AlbumDetailsSkeleton from "../elements/AlbumDetailsSkeleton";

type AlbumDetailsResultProps = {
  idArtist: number;
  idAlbum: number;
};

function AlbumDetailsResult({ idArtist, idAlbum }: AlbumDetailsResultProps) {
  const dispatch = useAppDispatch();
  const statusFetch = useAppSelector(statusSearchAlbum);
  const albumData = useAppSelector(resultAlbum);
  useEffect(() => {
    dispatch(
      fetchAlbum({
        id_album: String(idAlbum),
        id_artist: String(idArtist)
      })
    );
  }, [idArtist, idAlbum]);
  return (
    <>
      {statusFetch === "loading" ? <AlbumDetailsSkeleton /> : null}
      {statusFetch === "succeeded" ? (
        <AlbumDetails
          cover={albumData?.cover}
          album={albumData?.album}
          artist={albumData?.artist}
          realease={albumData?.realease}
        />
      ) : null}
    </>
  );
}

export default AlbumDetailsResult;
