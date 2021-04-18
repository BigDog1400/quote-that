import { CheckIcon, NotAllowedIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  HStack,
  Spacer,
  Square,
  Text
} from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { useRouter } from "next/router";
import React from "react";
import { trackType } from "../../types/trackType";
import { useMediaQuery } from "@chakra-ui/react";
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
  idTrack,
  colorMode = "dark"
}: TrackResultItemProps) {
  const { asPath, push } = useRouter();
  const [isLargerThan425] = useMediaQuery("(min-width: 425px)");
  return (
    <HStack
      paddingRight='1rem'
      minHeight='60px'
      w='100%'
      onClick={() => {
        if (!lyrics) return;
        push(`${asPath}/track/${idTrack}`);
      }}
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
        {isLargerThan425 && lang && lang !== "??" ? (
          <Badge p='1' colorScheme='blue' variant='solid'>
            {lang}
          </Badge>
        ) : (
          <div></div>
        )}
        {isLargerThan425 && bpm !== 0 ? (
          <Tooltip label='It indicates the number of beats in one minute.'>
            <Badge p='1' colorScheme='blue' variant='solid'>
              {bpm} BPM
            </Badge>
          </Tooltip>
        ) : (
          <div></div>
        )}

        <Badge
          p='1'
          display='flex'
          as='div'
          alignItems='center'
          colorScheme={lyrics ? "blue" : "gray"}
          variant='solid'
        >
          <span>LYRICS</span>
          <Center marginLeft='2'>
            {lyrics ? (
              <CheckIcon></CheckIcon>
            ) : (
              <NotAllowedIcon marginTop='2px'></NotAllowedIcon>
            )}
          </Center>
        </Badge>
      </HStack>
    </HStack>
  );
}

export default TrackResultItem;
