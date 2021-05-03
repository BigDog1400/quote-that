import { Box, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LetterReader from "../components/modules/LetterReader";
import CraftMenu from "../components/modules/CraftMenu";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../lib/reduxHooks";
import {
  fetchTrack,
  resultTrack,
  statusSearchTrack
} from "../lib/slices/trackSlice";
import { Skeleton } from "@chakra-ui/skeleton";

function View() {
  const dispatch = useAppDispatch();
  const [jsonRecordResponse, setJsonRecordResponse] = useState(null);
  const [isSendingData, setIsSendingData] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lyricsResult, setLyricsResult] = useState([]);
  const trackInfo = useAppSelector(resultTrack);
  const [indexesOfLinesSelected, setIndexesOfLinesSelected] = useState([]);
  const statusFetch = useAppSelector(statusSearchTrack);
  const { query, isReady, basePath, route, asPath, pathname } = useRouter();

  useEffect(() => {
    if (isReady) {
      dispatch(
        fetchTrack({
          idAlbum: String(query.album),
          idTrack: String(query.track),
          idArtist: String(query.artist)
        })
      );
    }
  }, [isReady]);
  useEffect(() => {
    if (statusFetch === "succeeded") {
      setLyricsResult(trackInfo.lyrics.split("\n"));
    }
  }, [trackInfo, statusFetch]);

  const [upperText, setUpperText] = useState("");
  const [bottomText, setBottomText] = useState("");

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
  const handleSaveLetter = async () => {
    setIsSendingData(true);
    const response = await axios.post("/api/record_letter", {
      upperText: upperText,
      bottomText: bottomText,
      track_name: trackInfo.track,
      artist_name: trackInfo.artist,
      cover: trackInfo.cover,
      lyrics: getContentOfLinesSelected()
    });
    setIsCompleted(true);
    setIsSendingData(false);
    setJsonRecordResponse(response.data);
  };
  if (statusFetch === "idle" || statusFetch === "loading")
    return (
      <div
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundColor: "white",
          padding: "3vh"
        }}
      >
        <Skeleton height='100%' w='100%'></Skeleton>
      </div>
    );
  if (statusFetch === "succeeded")
    return (
      <div
        style={{
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
            track_name={trackInfo.track}
            artist_name={trackInfo.artist}
            cover={trackInfo.cover}
          />
        </Box>
        <CraftMenu
          onToggleLyricLine={(lineNumber) => handleLyricChange(lineNumber)}
          lyrics={lyricsResult}
          isSending={isSendingData}
          indexesOfLinesSelected={indexesOfLinesSelected}
          onChangeBottomText={(updateValue) => {
            setBottomText(updateValue);
          }}
          onChangeUpperText={(updateValue) => {
            setUpperText(updateValue);
          }}
          onSaveLetter={() => handleSaveLetter()}
          isCompleted={isCompleted}
          JSON_id={jsonRecordResponse?.metadata?.id}
        />
      </div>
    );
  if (statusFetch === "failed")
    return (
      <div
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundColor: "white",
          padding: "3vh"
        }}
      >
        <Heading color='black'>Ha ocurrido un error</Heading>
      </div>
    );
}

export default View;
