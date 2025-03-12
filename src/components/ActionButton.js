 import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";



const ActionButton = ({ type, onPress }) => {
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

  const getButtonText = () => {
    switch (type) {
      case "free":
        return "5 min FREE";
      case "busy":
        return "Busy";
      case "chat":
        return "Chat";
      case "call":
        return "Call";
      default:
        return "Action";
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle()]} onPress={onPress}>
      <Text style={styles.text}>{getButtonText()}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  freeButton: {
    backgroundColor: "#2ECC71",
  },
  busyButton: {
    backgroundColor: "#E74C3C",
  },
  chatButton: {
    backgroundColor: "#F39C12",
  },
  callButton: {
    backgroundColor: "#3498DB",
  },
  defaultButton: {
    backgroundColor: "#95A5A6",
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
export default ActionButton;
