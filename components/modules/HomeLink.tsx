import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Logotipo from "../elements/Logotipo";
import PlaylistIlustration from "../elements/PlaylistIlustration";

function HomeLink() {
  const router = useRouter();
  return (
    <Box onClick={() => router.push("/")}>
      <Logotipo></Logotipo>
    </Box>
  );
}

export default HomeLink;
