import React from "react";
import CommonLayout from "../../../../../components/layouts/common";
import { GetStaticProps, GetStaticPaths } from "next";
import AlbumTracks from "../../../../../components/templates/AlbumTracks";

function Album({ id_artist, id_album }) {
  return (
    <CommonLayout title={"Quote That - Albums"} displayIlustration={false}>
      <AlbumTracks idArtist={id_artist} idAlbum={id_album} />
    </CommonLayout>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { id_artist, id_album }
  } = context;
  return {
    props: {
      id_artist: id_artist,
      id_album: id_album
    } // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking" //indicates the type of fallback
  };
};
export default Album;
