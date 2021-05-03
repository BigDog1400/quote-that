import { Button } from "@chakra-ui/button";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import LetterInputFields from "../elements/LetterInputFields";
import LetterPhraseSelector from "../elements/LetterPhraseSelector";

type CraftMenuProps = {
  lyrics: string[];
  onToggleLyricLine: (number) => void;
  indexesOfLinesSelected: number[];
  onChangeUpperText: (value: string) => void;
  onChangeBottomText: (value: string) => void;
  onSaveLetter: () => void;
  isSending: boolean;
  isCompleted: boolean;
  JSON_id: string;
};

function CraftMenu({
  lyrics,
  onToggleLyricLine,
  indexesOfLinesSelected,
  onChangeUpperText,
  onChangeBottomText,
  onSaveLetter,
  isSending,
  isCompleted,
  JSON_id
}: CraftMenuProps) {
  const { formData, handleInputChange } = useForm({
    bottomText: "",
    upperText: ""
  });

  const { bottomText, upperText } = formData;

  useEffect(() => {
    onChangeUpperText(formData.upperText);
  }, [formData.upperText]);
  useEffect(() => {
    onChangeBottomText(formData.bottomText);
  }, [formData.bottomText]);
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
          <LetterInputFields
            upperText={upperText}
            bottomText={bottomText}
            handleTextChange={handleInputChange}
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
            <VStack>
              {!isCompleted ? (
                isSending ? (
                  <Text mb={4} fontWeight='bold'>
                    Generando Link... <Spinner />
                  </Text>
                ) : (
                  <>
                    <Text mb={4} fontWeight='bold'>
                      Una vez guardes tu carta, no podrás modificarla!
                    </Text>
                    <Button onClick={onSaveLetter}>Guardar</Button>{" "}
                  </>
                )
              ) : null}
              {isCompleted ? (
                <>
                  <Text>Este es tu enlace </Text>
                  <HStack spacing={4}>
                    <Text>{`${window?.location?.origin}/read/${JSON_id}`}</Text>
                    <Button
                      size='sm'
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `${window?.location?.origin}/read/${JSON_id}`
                        )
                      }
                    >
                      copy
                    </Button>
                  </HStack>
                </>
              ) : null}
            </VStack>
          </Box>
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab borderBottom='none'>Lyric</Tab>
        <Tab borderBottom='none'>Mensaje</Tab>
        <Tab borderBottom='none'>Guardar</Tab>
      </TabList>
    </Tabs>
  );
}

export default CraftMenu;
