import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";

function InputSearchTopBar() {
  return (
    <InputGroup w={["80%", "40%", "20%"]}>
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
      />
      <Input
        variant='filled'
        placeholder='Bad bunny, Dua Lipa, Billie Eilish...'
      ></Input>
    </InputGroup>
  );
}

export default InputSearchTopBar;
