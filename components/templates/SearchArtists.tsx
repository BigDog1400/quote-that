import { Center, VStack } from "@chakra-ui/layout";
import React from "react";
import InputSearch from "../elements/InputSearch";
import { fetchArtists } from "../../lib/slices/artistsSlice";
import { useAppDispatch } from "../../lib/reduxHooks";
import { debounce } from "debounce";
import ArtistListResult from "../modules/ArtistListResult";

export default function SearchArtists() {
  const dispatch = useAppDispatch();

  const onChangeSearch = debounce((value) => {
    if (value === "") return;
    dispatch(fetchArtists(value));
  }, 1000);
  return (
    <VStack spacing='3rem'>
      {/* SEARCH INPUT COMPONENT */}
      <Center width={{ base: "80%", md: "50%" }}>
        <InputSearch
          placeholder='Bad bunny, Dua Lipa, Billie Eilish...'
          labelText='Busca tu artista favorito'
          onChangeValue={(value) => onChangeSearch(value)}
        />
      </Center>

      {/* SEARCH RESULTS COMPONENTS */}
      <Center
        w={{
          base: "80%",
          md: "40%"
        }}
        p={4}
      >
        <ArtistListResult></ArtistListResult>
      </Center>
    </VStack>
  );
}
