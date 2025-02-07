import React from "react";
import { View, Text } from "react-native";

const HeaderContainer = ({ children }: any) => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
      }}
    >
      {children}
    </View>
  );
};

export default HeaderContainer;
