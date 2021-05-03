import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";

type LetterInputFieldsProps = {
  upperText: string;
  bottomText: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function LetterInputFields({
  upperText,
  bottomText,
  handleTextChange
}: LetterInputFieldsProps) {
  return (
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
        name='upperText'
        onChange={(e) => handleTextChange(e)}
        placeholder='Mis primeras palabras'
        size='xl'
        p={2}
      />
      <Text mb='8px' fontWeight='bold'>
        Texto Inferior
      </Text>
      <Textarea
        resize='none'
        name='bottomText'
        value={bottomText}
        onChange={(e) => handleTextChange(e)}
        placeholder='Mis ultimas palabras'
        size='xl'
        p={2}
      />
    </Box>
  );
}

export default LetterInputFields;
