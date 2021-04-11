import React from "react";
import CommonLayout from "../../../../../../components/layouts/common";
import { GetStaticProps, GetStaticPaths } from "next";
import Track from "../../../../../../components/templates/Track";

function Album({ id_artist, id_album, id_track }) {
  return (
    <CommonLayout displayIlustration={false}>
      <Track idAlbum={id_album} idTrack={id_track} idArtist={id_artist} />
    </CommonLayout>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { id_artist, id_album, id_track }
  } = context;
  return {
    props: {
      id_artist: id_artist,
      id_album: id_album,
      id_track: id_track
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
