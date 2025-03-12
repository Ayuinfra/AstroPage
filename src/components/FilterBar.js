import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

const filters = ["Vedic", "Love", "Job", "Marriage"];

const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("Vedic"); 

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button,
              selectedFilter === item && styles.selectedButton,
            ]}
            onPress={() => setSelectedFilter(item)}
          >
            <Text
              style={[
                styles.text,
                selectedFilter === item && styles.selectedText, 
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#E9C46A",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#F4A261", 
  },
  text: {
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "#FFF", 
  },
});

export default FilterBar;
