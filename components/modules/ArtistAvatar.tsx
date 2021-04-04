import React from "react";
import AvatarWithName from "../elements/AvatarWithName";
import AvatarWithNameSkeleton from "../elements/AvatarWithNameSkeleton";

type ArtistAvatarProps = {
  isLoading: boolean;
  urlAvatar: string;
  artistName: string;
};

function ArtistAvatar({ isLoading, urlAvatar, artistName }: ArtistAvatarProps) {
  return (
    <>
      {isLoading ? (
        <AvatarWithNameSkeleton />
      ) : (
        <AvatarWithName urlAvatar={urlAvatar} name={artistName} />
      )}
    </>
  );
}

export default ArtistAvatar;
