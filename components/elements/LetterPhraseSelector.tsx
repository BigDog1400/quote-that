import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type LetterPhraseSelectorProps = {
  lyrics: string[];
  onToggleLyricLine: (number) => void;
  indexesOfLinesSelected: number[];
};

function LetterPhraseSelector({
  lyrics,
  onToggleLyricLine,
  indexesOfLinesSelected
}: LetterPhraseSelectorProps) {
  return (
    <Box
      borderRadius='8px'
      width='fit-content'
      maxHeight='30vh'
      padding='8'
      overflow='scroll'
      backgroundColor='gray.700'
      style={{
        overflowX: "hidden"
      }}
      css={{
        "&::-webkit-scrollbar": {
          width: "14px",
          background: "rgba(24,30,47,0.1)",
          borderRadius: "20px"
        },
        "&::-webkit-scrollbar-track": {
          width: "14px"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#ffffff",
          borderRadius: "10px"
        }
      }}
    >
      {lyrics.map((el, index) =>
        el !== "" ? (
          <Text
            key={index}
            onClick={() => onToggleLyricLine(index)}
            padding={2}
            margin={1}
            color='white'
            backgroundColor={
              indexesOfLinesSelected.includes(index) ? "gray.500" : ""
            }
            borderRadius='md'
            fontSize='1.1em'
            _hover={{
              backgroundColor: indexesOfLinesSelected.includes(index)
                ? "red.500"
                : "gray.500",
              cursor: "pointer"
            }}
          >
            {el}
          </Text>
        ) : (
          <br></br>
        )
      )}
    </Box>
  );
}

export default LetterPhraseSelector;
