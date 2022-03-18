import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TextInput, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  const [val, setVal] = useState("");
  return (
    <View style={styles.header}>
      <TextInput
        value={val}
        onChangeText={(v) => {
          setVal(v);
          props.searchItemHandler(v);
        }}
        style={[styles.searchBox, { fontSize: 20 }]}
        placeholder="Search"
      />
      <View style={styles.iconBox}>
        <AntDesign
          name="plus"
          size={34}
          color="black"
          onPress={() => {
            props.addItemHandler(val);
            setVal("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    borderColor: "black",
    borderWidth: 2,
  },
  searchBox: {
    margin: 10,
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 2,
    height: "60%",
    padding: 12,
  },
  iconBox: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "black",
    borderLeftWidth: 2,
    width: "25%",
  },
});

export default Header;
