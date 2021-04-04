import { Badge, HStack, Spacer, Square, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

type TrackResultItemProps = {
  trackName: string;
  lang: string;
  lyrics: boolean;
  bpm: number;
  colorMode: "dark" | "light";
};

function TrackResultItem({
  trackName,
  lang,
  lyrics,
  bpm,
  colorMode = "dark"
}: TrackResultItemProps) {
  return (
    <HStack
      justifyContent='space-between'
      paddingRight='1rem'
      minHeight='60px'
      w='100%'
      layerStyle={colorMode === "dark" ? "cardDarkMode" : "cardLightMode"}
      spacing='1rem'
    >
      <Square size='60px' bg='white' color='black'>
        <Text fontSize='2xl'>1</Text>
      </Square>
      <Text fontSize='lg'>{trackName}</Text>

      {bpm !== 0 ? (
        <Tooltip label='It indicates the number of beats in one minute.'>
          <Badge p='1' colorScheme='blue' variant='solid'>
            {bpm} BPM
          </Badge>
        </Tooltip>
      ) : (
        <div></div>
      )}

      {lang ? (
        <Badge p='1' colorScheme='blue' variant='solid'>
          {lang}
        </Badge>
      ) : (
        <div></div>
      )}
      <Badge p='1' colorScheme={lyrics ? "blue" : "gray"} variant='solid'>
        LYRICS
      </Badge>
    </HStack>
  );
}

export default TrackResultItem;
