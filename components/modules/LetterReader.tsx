import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";

type LetterReaderProps = {
  lyrics: string[];
  upperText: string;
  bottomText: string;
  cover: string;
  artist_name: string;
  track_name: string;
};

function LetterReader({
  lyrics,
  upperText,
  bottomText,
  cover,
  artist_name,
  track_name
}: LetterReaderProps) {
  const [lyricsParsed, setLyricsParsed] = useState([]);

  useEffect(() => {
    if (lyrics.length === 1) {
      let content = lyrics;
      content[0] = `"${content[0]}"`;
      setLyricsParsed(content);
    } else if (lyrics.length > 1) {
      let content = lyrics;
      content[0] = `"${content[0]}`;
      content[content.length - 1] = `${content[content.length - 1]}"`;
      setLyricsParsed(content);
    } else {
      setLyricsParsed([]);
    }
  }, [lyrics]);

  return (
    <VStack height='100%' p={10}>
      <HStack flex='25%' w='40%' alignSelf='flex-start'>
        <Heading color='black' fontWeight='100' textAlign='left'>
          {upperText}
        </Heading>
      </HStack>
      <HStack
        flex='30%'
        w='100%'
        backgroundColor='rgb(241,241,241)'
        justifyContent='flex-end'
        p={10}
      >
        <Box>
          <HStack>
            <Box p={5}>
              {lyricsParsed.map((lyric, index) => (
                <Text textAlign='right' as='h2' fontSize='3rem' color='black'>
                  {lyric}
                </Text>
              ))}
            </Box>
            <Spacer></Spacer>
            <Image
              marginLeft='auto'
              borderRadius='full'
              boxSize='200px'
              alt='Artist Cover'
              fallbackSrc='img/mello-face.png'
              src={cover}
            />
          </HStack>
          <Heading textAlign='right' fontSize='3rem' color='black'>
            {track_name} - {artist_name}
          </Heading>
        </Box>
      </HStack>
      <HStack flex='55%' alignSelf='flex-end'>
        <Heading color='black' fontWeight='100' textAlign='right'>
          {bottomText}
        </Heading>
      </HStack>
    </VStack>
  );
}

export default LetterReader;
