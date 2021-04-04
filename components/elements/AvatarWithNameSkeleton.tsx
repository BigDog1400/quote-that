import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

function AvatarWithNameSkeleton() {
  return (
    <>
      <SkeletonCircle size='200'></SkeletonCircle>
      <SkeletonText mt='4' height='43px' width='100px' noOfLines={1} />
    </>
  );
}

export default AvatarWithNameSkeleton;
