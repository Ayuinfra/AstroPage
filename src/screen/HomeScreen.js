import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import AstroCard from "../components/AstroCard";
import AstroData from "../data/AstroData";

const HomeScreen = () => (
  <View style={styles.container}>
    <Header title="Astrologer" />
    <FilterBar />
    <FlatList data={AstroData} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <AstroCard astrologer={item} />} />
  </View>
);

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#F5F5F5" } });

export default HomeScreen;
