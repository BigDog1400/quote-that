import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/reduxHooks";
import {
  fetchAlbums,
  resultAlbums,
  statusSearchAlbums
} from "../../lib/slices/albumsSlice";
import AlbumResultItem from "../elements/AlbumResultItem";
import AlbumResultItemSkeleton from "../elements/AlbumResultItemSkeleton";

type AlbumListResultProps = {
  idArtist: string;
};

function AlbumListResult({ idArtist }: AlbumListResultProps) {
  const albumsData = useAppSelector(resultAlbums);
  const statusFetch = useAppSelector(statusSearchAlbums);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(idArtist));
  }, [idArtist]);

  return (
    <Box>
      <Text fontSize='1.5rem' textAlign='center'>
        Albums
      </Text>
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
    </Box>
  );
}

export default AlbumListResult;
