import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchArtist,
  resultArtist,
  statusSearchArtist
} from "../../lib/slices/artistSlice";
import AvatarWithName from "../elements/AvatarWithName";
import AvatarWithNameSkeleton from "../elements/AvatarWithNameSkeleton";

type ArtistAvatarProps = {
  idArtist: string;
};

function ArtistAvatar({ idArtist }: ArtistAvatarProps) {
  const dispatch = useAppDispatch();
  const artistData = useAppSelector(resultArtist);
  const currentStatusSearchArtist = useAppSelector(statusSearchArtist);

  useEffect(() => {
    dispatch(fetchArtist({ search: idArtist }));
  }, [idArtist]);

  if (
    currentStatusSearchArtist === "loading" ||
    currentStatusSearchArtist === "idle"
  )
    return <AvatarWithNameSkeleton />;

  if (currentStatusSearchArtist === "succeeded")
    return (
      <AvatarWithName urlAvatar={artistData.cover} name={artistData.artist} />
    );
}

export default ArtistAvatar;
