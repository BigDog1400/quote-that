import { Center, Stack, VStack } from "@chakra-ui/layout";
import React from "react";
import InputSearch from "../elements/InputSearch";
import { fetchArtists, resultArtists } from "../../lib/slices/artistSlice";
import { useAppSelector, useAppDispatch } from "../../lib/reduxHooks";
import { debounce } from "debounce";
import ArtistResultItem from "../elements/ArtistResultItem";
import ArtistListResult from "../modules/ArtistListResult";

export default function SearchArtists() {
  const statusFetchArtists = useAppSelector(({ artists }) => artists.status);
  const dispatch = useAppDispatch();
  const data = useAppSelector(resultArtists);

  const onChangeSearch = debounce((value) => {
    if (value === "") return;
    dispatch(fetchArtists(value));
  }, 1000);
  return (
    <VStack spacing='3rem'>
      {/* SEARCH INPUT COMPONENT */}
      <Center width={"50%"}>
        <InputSearch
          placeholder='Bad bunny, Dua Lipa, Billie Eilish...'
          labelText='Busca tu artista favorito'
          onChangeValue={(value) => onChangeSearch(value)}
        />
      </Center>

      {/* SEARCH RESULTS COMPONENTS */}
      <Center w='40%' p={4}>
        <ArtistListResult></ArtistListResult>
      </Center>
    </VStack>
  );
}
