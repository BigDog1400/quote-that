import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../lib/reduxHooks";
import { resultAlbums, statusSearchAlbums } from "../../lib/slices/albumsSlice";
import AlbumResultItem from "../elements/AlbumResultItem";
import AlbumResultItemSkeleton from "../elements/AlbumResultItemSkeleton";
import LoadingSpinner from "../elements/LoadingSpinner";

type AlbumListResultProps = {
  idArtist: string;
};

function AlbumListResult({ idArtist }: AlbumListResultProps) {
  const albumsData = useAppSelector(resultAlbums);
  const statusFetch = useAppSelector(statusSearchAlbums);

  return (
    <Flex wrap='wrap' justifyContent='center'>
      {statusFetch === "loading"
        ? Array(10)
            .fill(null)
            .map((e) => (
              <Box
                p={{
                  base: 6,
                  md: 3
                }}
              >
                <AlbumResultItemSkeleton />
              </Box>
            ))
        : null}

      {statusFetch === "succeeded" && albumsData?.length > 0
        ? albumsData.map((album) => (
            <Box
              p={{
                base: 6,
                md: 3
              }}
            >
              <AlbumResultItem
                idAlbum={String(album.id_album)}
                idArtist={String(idArtist)}
                coverAlbumUrl={album.cover}
                nameAlbum={album.album}
              ></AlbumResultItem>
            </Box>
          ))
        : null}

      {statusFetch === "succeeded" && albumsData?.length <= 0 ? (
        <span>Sin resultados</span>
      ) : null}
    </Flex>
  );
}

export default AlbumListResult;
