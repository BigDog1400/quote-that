import { Skeleton } from "@chakra-ui/skeleton";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LetterReader from "./LetterReader";

function ReadLetter() {
  const { query, isReady } = useRouter();
  const [isLoading, setIsLoading] = useState(null);
  const [letterData, setLetterData] = useState(null);
  const fetchData = async (query) => {
    setIsLoading(true);
    const response = await axios.post("/api/read_letter", {
      id: query
    });
    if (response.status === 200) {
      setLetterData(response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (!isReady) return;
    fetchData(query.q);
  }, [isReady, query]);

  if (isLoading === null || isLoading)
    return <Skeleton height='100%' w='100%'></Skeleton>;

  return (
    <LetterReader
      artist_name={letterData.artist_name}
      bottomText={letterData.bottomText}
      track_name={letterData.track_name}
      lyrics={letterData.lyrics}
      cover={letterData.cover}
      upperText={letterData.upperText}
    ></LetterReader>
  );
}

export default ReadLetter;
