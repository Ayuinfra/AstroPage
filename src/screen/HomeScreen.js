
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import AstroCard from "../components/AstroCard";
import astrologers from "../data/AstroData";

const HomeScreen = () => {
    return (
        <View style = {StyleSheet.container}>
            <Header title = "Astrologer"/>
            <FilterBar />
            <FlatList 
                 data = {astrologers}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({item}) => <AstroCard astrologer={item}/>}
            />
        </View>
    )
};

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor: "#F5F5F5",
    }
})

export default HomeScreen;