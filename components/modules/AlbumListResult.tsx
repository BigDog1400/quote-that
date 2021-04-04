import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../lib/reduxHooks";
import { resultAlbums, statusSearchAlbums } from "../../lib/slices/albumsSlice";
import AlbumResultItem from "../elements/AlbumResultItem";
import LoadingSpinner from "../elements/LoadingSpinner";

function AlbumListResult() {
  const albumsData = useAppSelector(resultAlbums);
  const statusFetch = useAppSelector(statusSearchAlbums);

  return (
    <Flex wrap='wrap' justifyContent='center'>
      {statusFetch === "loading" ? <LoadingSpinner /> : null}

      {albumsData?.length > 0
        ? albumsData.map((album) => (
            <Box
              p={{
                base: 6,
                md: 3
              }}
            >
              <AlbumResultItem
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
