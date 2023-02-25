import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function ClockListScreen({
  navigation,
}: RootTabScreenProps<"ClockList">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your clocks:</Text>
      <View
        style={styles.separator}
        lightColor="#f00"
        darkColor={Colors.dark.tint}
      />
      <Pressable
        style={{
          backgroundColor: Colors.light.text,
          padding: 10,
          borderRadius: 150,
        }}
        onPress={() => navigation.navigate("EditClock")}
      >
        <FontAwesome
          name="plus"
          size={35}
          color={Colors.dark.white}
          style={{ margin: 5 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.white,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
