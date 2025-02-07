import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Input = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      {...props}
      onSubmitEditing={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      className={`border ${
        isFocused ? "border-brand" : "border-gray-300"
      } rounded-md h-[50px] bg-light px-4`}
    />
  );
};

export default Input;
