import { Text } from "@chakra-ui/layout";
import React from "react";

type LyricsViewProps = {
  lyrics: string;
};

function LyricsView({ lyrics }: LyricsViewProps) {
  return (
    <div>
      <Text fontSize='xl' textAlign='center' mb='2'>
        [Lyrics]
      </Text>
      <Text
        style={{
          whiteSpace: "pre-line"
        }}
        textAlign='center'
        fontSize='xl'
      >
        {lyrics}
      </Text>
    </div>
  );
}

export default LyricsView;
