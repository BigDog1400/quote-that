import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React, { useState, useEffect } from "react";
type InputSearchProps = {
  formControlId?: string;
  type?: string;
  labelText: string;
  onChangeValue: (arg: string | number) => void;
  placeholder: string;
};

function InputSearch({
  formControlId,
  type,
  onChangeValue,
  placeholder,
  labelText
}: InputSearchProps) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    onChangeValue(searchValue);
  }, [searchValue]);

  return (
    <FormControl id={formControlId}>
      <FormLabel>{labelText}</FormLabel>
      <Input
        value={searchValue}
        type={type}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

export default InputSearch;
