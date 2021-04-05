import { Badge, HStack, Spacer, Square, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { trackType } from "../../types/trackType";

type TrackResultItemProps = {
  colorMode: "dark" | "light";
  trackNumber: number;
} & trackType;

function TrackResultItem({
  trackName,
  lang,
  lyrics,
  bpm,
  trackNumber,
  colorMode = "dark"
}: TrackResultItemProps) {
  return (
    <HStack
      // justifyContent='space-between'
      paddingRight='1rem'
      minHeight='60px'
      w='100%'
      layerStyle={colorMode === "dark" ? "cardDarkMode" : "cardLightMode"}
      spacing='1rem'
    >
      <Square size='60px' bg='white' color='black'>
        <Text fontSize='2xl'>{trackNumber}</Text>
      </Square>
      <Text mr='auto' fontSize='lg' isTruncated>
        {trackName}
      </Text>

      <HStack>
        {lang && lang !== "??" ? (
          <Badge p='1' colorScheme='blue' variant='solid'>
            {lang}
          </Badge>
        ) : (
          <div></div>
        )}
        {bpm !== 0 ? (
          <Tooltip label='It indicates the number of beats in one minute.'>
            <Badge p='1' colorScheme='blue' variant='solid'>
              {bpm} BPM
            </Badge>
          </Tooltip>
        ) : (
          <div></div>
        )}

        <Badge p='1' colorScheme={lyrics ? "blue" : "gray"} variant='solid'>
          LYRICS
        </Badge>
      </HStack>
    </HStack>
  );
}

export default TrackResultItem;
