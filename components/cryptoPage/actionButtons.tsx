import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ActionButtons = () => {
  return (
    <View style={{ flexDirection: "row", gap: 10, margin: 12 }}>
      <TouchableOpacity
        style={[
          defaultStyles.pillButtonSmall,
          {
            backgroundColor: Colors.primary,
            flexDirection: "row",
            gap: 16,
          },
        ]}
      >
        <Ionicons name="add" size={24} color={"#fff"} />
        <Text style={[defaultStyles.buttonText, { color: "#fff" }]}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          defaultStyles.pillButtonSmall,
          {
            backgroundColor: Colors.primaryMuted,
            flexDirection: "row",
            gap: 16,
          },
        ]}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        <Text style={[defaultStyles.buttonText, { color: Colors.primary }]}>
          Receive
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({});
