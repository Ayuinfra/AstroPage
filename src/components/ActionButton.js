import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ActionButton = ({ type, label, onPress }) => {
  const getButtonStyle = () => {
    switch (type) {
      case "free":
        return styles.freeButton;
      case "busy":
        return styles.busyButton;
      case "chat":
        return styles.chatButton;
      case "call":
        return styles.callButton;
      default:
        return styles.defaultButton;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle()]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, alignItems: "center", marginHorizontal: 5 },
  freeButton: { backgroundColor: "#2ECC71" },
  busyButton: { backgroundColor: "#E74C3C" },
  chatButton: { backgroundColor: "#F39C12" },
  callButton: { backgroundColor: "#3498DB" },
  defaultButton: { backgroundColor: "#95A5A6" },
  text: { color: "#FFF", fontWeight: "bold" },
});

export default ActionButton;
