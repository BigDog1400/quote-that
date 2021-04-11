import { SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

function LyricsSkeleton() {
  return <SkeletonText spacing='10' w='500px' noOfLines={10}></SkeletonText>;
}

export default LyricsSkeleton;
