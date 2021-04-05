import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

function AlbumDetailsSkeleton() {
  return (
    <>
      <Flex>
        <Skeleton width='200px' marginRight={4} height='200px' />
        <Box>
          <SkeletonText w='200px' mt='1' mb='4' noOfLines={3} spacing='4' />
        </Box>
      </Flex>
    </>
  );
}

export default AlbumDetailsSkeleton;
