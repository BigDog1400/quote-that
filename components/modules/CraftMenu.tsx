import { Box, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Textarea } from "@chakra-ui/textarea";
import React, { useEffect, useState } from "react";
import LetterPhraseSelector from "../elements/LetterPhraseSelector";

function CraftMenu({
  lyrics,
  onToggleLyricLine,
  indexesOfLinesSelected,
  onChangeUpperText,
  onChangeBottomText
}) {
  const [bottomText, setBottomText] = useState("");
  const [upperText, setUpperText] = useState("");

  let handleTextChange = (e, setter) => {
    let inputValue = e.target.value;
    setter(inputValue);
  };
  useEffect(() => {
    onChangeUpperText(upperText);
  }, [upperText]);
  useEffect(() => {
    onChangeBottomText(bottomText);
  }, [bottomText]);
  return (
    <Tabs
      position='absolute'
      backgroundColor='gray.800'
      bottom='1rem'
      borderRadius='8px'
      left='3rem'
    >
      <TabPanels>
        <TabPanel>
          <LetterPhraseSelector
            lyrics={lyrics}
            onToggleLyricLine={onToggleLyricLine}
            indexesOfLinesSelected={indexesOfLinesSelected}
          />
        </TabPanel>
        <TabPanel>
          <Box
            maxHeight='30vh'
            padding='8'
            borderRadius='8px'
            backgroundColor='gray.700'
            width='600px'
          >
            <Text mb='8px' fontWeight='bold'>
              Texto Superior
            </Text>
            <Textarea
              resize='none'
              value={upperText}
              onChange={(e) => handleTextChange(e, setUpperText)}
              placeholder='Here is a sample placeholder'
              size='xl'
              p={2}
            />
            <Text mb='8px' fontWeight='bold'>
              Texto Inferior
            </Text>
            <Textarea
              resize='none'
              value={bottomText}
              onChange={(e) => handleTextChange(e, setBottomText)}
              placeholder='Here is a sample placeholder'
              size='xl'
              p={2}
            />
          </Box>
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab borderBottom='none'>Lyric</Tab>
        <Tab borderBottom='none'>Mensaje</Tab>
      </TabList>
    </Tabs>
  );
}

export default CraftMenu;
