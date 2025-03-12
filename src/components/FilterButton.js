import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterButton = ({ selectedFilter, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[selectedFilter]]} onPress={onPress}>
      <Text style={styles.text}>{selectedFilter}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  text: {
    fontWeight: "bold",
    color: "#FFF",
  },
  Vedic: { backgroundColor: "#2ECC71" },
  Love: { backgroundColor: "#E74C3C" },
  Job: { backgroundColor: "#3498DB" },
  Marriage: { backgroundColor: "#F39C12" },
  Default: { backgroundColor: "#95A5A6" },
});

export default FilterButton;
