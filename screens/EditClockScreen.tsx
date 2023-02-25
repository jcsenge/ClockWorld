import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function EditClockScreen({
  navigation,
}: RootTabScreenProps<"EditClock">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new clock</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Pressable
        style={styles.doneButton}
        onPress={() => navigation.navigate("ClockList")}
      >
        <Text style={styles.buttonText}>Done!</Text>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  doneButton: {
    borderRadius: 25,
    backgroundColor: Colors.dark.primary,
    padding: 15,
  },
  buttonText: { fontSize: 20, fontWeight: "bold", color: Colors.dark.white },
});
