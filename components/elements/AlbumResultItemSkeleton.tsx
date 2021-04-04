import { VStack } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

function AlbumResultItemSkeleton() {
  return (
    <Skeleton height='200px' width='200px'>
      <VStack>
        <Skeleton height='120px' w='120px'></Skeleton>
        <SkeletonText mt='4' height='43px' width='100px' noOfLines={1} />{" "}
      </VStack>
    </Skeleton>
  );
}

export default AlbumResultItemSkeleton;
