import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AdPreview from "../../assets/AdPreview";
import FilterIcon from "../../assets/filter.webp"; 
import VedicIcon from "../../assets/Vedic.png";
import LoveIcon from "../../assets/Love.jpg";
import JobIcon from "../../assets/Job.webp";
import MarriageIcon from "../../assets/Marriage.png";

const filters = [
  { name: "Filter", icon: FilterIcon, isFilter: true }, 
  { name: "Vedic", icon: VedicIcon },
  { name: "Love", icon: LoveIcon },
  { name: "Job", icon: JobIcon },
  { name: "Marriage", icon: MarriageIcon },
];

const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("Vedic");

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        horizontal
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button, 
              { borderColor: selectedFilter === item.name ? "#E9C46A" : "black" },
            ]}
            onPress={() => setSelectedFilter(item.name)}
          >
            {!item.isFilter && <Image source={item.icon} style={styles.icon} />}
            <Text style={[styles.text, selectedFilter === item.name && styles.selectedText]}>
              {item.name}
            </Text>
            {item.isFilter && <Image source={item.icon} style={styles.filterButtonIcon} />}
          </TouchableOpacity>
        )}
      />
       <AdPreview />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10 },
  button: { 
    flexDirection: "row", 
    alignItems: "center",  
    padding: 5,
    borderRadius: 20, 
    marginHorizontal: 5, 
    marginBottom:7,
    borderWidth: 1, 
  },
  text: { fontWeight: "bold", color: "#333", marginHorizontal: 5 },
  icon: { width: 20, height: 20, resizeMode: "contain", marginRight: 5 }, 
  filterButtonIcon: { width: 20, height: 20, resizeMode: "contain", marginLeft: 5 }, 
});

export default FilterBar;
