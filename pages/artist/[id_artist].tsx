import React from "react";
import { useRouter } from "next/router";
import CommonLayout from "../../components/layouts/common";
import ArtistDetails from "../../components/templates/ArtistDetails";
import { GetStaticProps, GetStaticPaths } from "next";

function Artist({ id_artist }) {
  return (
    <CommonLayout displayIlustration={false}>
      <ArtistDetails idArtist={String(id_artist)} />
    </CommonLayout>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { id_artist }
  } = context;
  return {
    props: {
      id_artist: id_artist
    } // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking" //indicates the type of fallback
  };
};
export default Artist;
