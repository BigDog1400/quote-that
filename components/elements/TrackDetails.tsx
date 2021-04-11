import { Avatar } from "@chakra-ui/avatar";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";

type TrackDetailsProps = {
  coverURL: string;
  trackName: string;
  albumName: string;
  artistName: string;
};

function TrackDetails({
  coverURL,
  trackName,
  albumName,
  artistName
}: TrackDetailsProps) {
  const { colorMode } = useColorMode();
  console.log(coverURL);
  return (
    <Stack justifyContent='center' wrap='wrap' direction='row' spacing='1rem'>
      <Box h='200px' w='200px'>
        <Avatar
          showBorder
          borderColor={colorMode === "dark" ? "white" : "black"}
          size='full'
          name={trackName}
          src={coverURL}
        />
      </Box>
      <Stack spacing='2'>
        <Heading marginTop='4' fontSize='xxx-large'>
          {trackName}
        </Heading>
        <Text as='h3' fontSize='2xl'>
          {artistName}
        </Text>
        <Text fontSize='xl'>Album {albumName}</Text>
      </Stack>
    </Stack>
  );
}

export default TrackDetails;
