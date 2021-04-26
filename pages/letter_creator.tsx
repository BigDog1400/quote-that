import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import LetterReader from "../components/modules/LetterReader";
import CraftMenu from "../components/modules/CraftMenu";

function View() {
  const [indexesOfLinesSelected, setIndexesOfLinesSelected] = useState([]);
  const [lyricsResult, setLyricsResult] = useState([]);
  const { query } = useRouter();
  const [upperText, setUpperText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const { isLoading, error, data } = useQuery("repoData", async () => {
    const response = await fetch(
      "https://api.happi.dev/v1/music/artists/1154/albums/4232/tracks/72109/lyrics?apikey=634de07pR2uL6hfMNJYysTvJ2o4CvbZvIBbLOyhOxln8lNRh1sudNBVt"
    );
    if (response.ok) {
      const json = await response.json();
      setLyricsResult(json.result.lyrics.split("\n"));
      return json;
    }
  });

  const handleLyricChange = (lineNumber) => {
    if (indexesOfLinesSelected.includes(lineNumber)) {
      setIndexesOfLinesSelected((prevState) =>
        prevState.filter((el) => el !== lineNumber)
      );
    } else {
      setIndexesOfLinesSelected((prevState) => prevState.concat(lineNumber));
    }
  };

  const getContentOfLinesSelected = () =>
    indexesOfLinesSelected.map((numberOfLine) => lyricsResult[numberOfLine]);

  return (
    <div
      style={{
        backgroundImage: "url(img/485.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundColor: "white",
        padding: "3vh"
      }}
    >
      <Box border='2px solid black' height='100%' width='100%'>
        <LetterReader
          lyrics={getContentOfLinesSelected()}
          upperText={upperText}
          bottomText={bottomText}
        />
      </Box>
      <CraftMenu
        onToggleLyricLine={(lineNumber) => handleLyricChange(lineNumber)}
        lyrics={lyricsResult}
        indexesOfLinesSelected={indexesOfLinesSelected}
        onChangeBottomText={(updateValue) => {
          setBottomText(updateValue);
        }}
        onChangeUpperText={(updateValue) => {
          setUpperText(updateValue);
        }}
      />
    </div>
  );
}

export default View;
