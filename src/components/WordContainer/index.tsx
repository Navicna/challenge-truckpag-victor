import { fullWidth } from "@constants/metrics";
import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

function WordContainer({
  onPress,
  children,
  numColumns = 3,
}: {
  onPress(children: string): void;
  children: string;
  numColumns?: number;
}) {
  const handlePressWord = () => {
    onPress(children);
  };

  return (
    <View
      borderWidth={1}
      borderColor="purple.400"
      width={fullWidth / numColumns}
      alignItems="center"
      justifyContent="center"
      p="5"
    >
      <TouchableOpacity
        hitSlop={{
          top: 10,
          left: 50,
          bottom: 10,
          right: 50,
        }}
        onPress={handlePressWord}
      >
        <Text
          fontSize="xl"
          color="purple.500"
          fontWeight="bold"
          textAlign="center"
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { WordContainer };
