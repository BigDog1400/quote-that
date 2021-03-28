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
import { SearchIcon } from "@chakra-ui/icons";

export default function Home() {
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
          <span>Aqui irian los resultados</span>
        </VStack>
      </VStack>
    </Container>
  );
}
