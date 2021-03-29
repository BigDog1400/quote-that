import Head from "next/head";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  HStack,
  TagLabel,
  Text,
  VStack
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../lib/reduxHooks";
import { increment, incrementByAmount } from "../lib/slices/counterSlice";
import { fetchArtists } from "../lib/slices/artistSlice";
import { STATUS } from "../types/statusRequestRedux";

export default function Home() {
  const counter = useAppSelector(({ counter }) => counter.value);
  const artists = useAppSelector(({ artists }) => artists.data);
  const statusFetchArtists = useAppSelector(({ artists }) => artists.status);
  const dispatch = useAppDispatch();

  return (
    <Container maxW='container.xl'>
      <VStack marginTop='20vh'>
        <VStack w='50%'>
          <FormControl id='email'>
            <FormLabel>Busca un artista</FormLabel>
            <Input
              type='email'
              placeholder='Dua Lipa, Billie Eilish, Bad bunny'
            />
          </FormControl>
        </VStack>
        <VStack>
          <span>El counter actual es {counter}</span>
          <Button onClick={() => dispatch(increment())}>
            Aumentar counter
          </Button>
          <Button onClick={() => dispatch(incrementByAmount(5))}>
            Aumentar counter en 5
          </Button>
          <span>Aqui irian los resultados</span>
          {statusFetchArtists === STATUS.loading ? (
            <span>Is loading</span>
          ) : (
            <span>Userdata {JSON.stringify(artists)}</span>
          )}
          <Button onClick={() => dispatch(fetchArtists("Lil Nas"))}>
            Fetch data
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
