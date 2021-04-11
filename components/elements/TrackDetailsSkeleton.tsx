import { Stack } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

function TrackDetailsSkeleton() {
  return (
    <Stack justifyContent='center' wrap='wrap' direction='row' spacing='1rem'>
      <Skeleton height='200px' width='200px'></Skeleton>
      <Stack>
        <SkeletonText
          w='200px'
          mt='1'
          mb='4'
          noOfLines={3}
          spacing='4'
        ></SkeletonText>
      </Stack>
    </Stack>
  );
}

export default TrackDetailsSkeleton;
