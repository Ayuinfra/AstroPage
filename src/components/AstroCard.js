import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const AstroCard = ({ astrologer}) => {
    return (
        <View style = {styles.card}>
            <Image src = {{}} style = {styles.image} />
                <View style = {styles.info}>
                <Text style={styles.name}>{astrologer.name}</Text>
                <Text style={styles.details}>{astrologer.skills}</Text>
                <Text style={styles.exp}>{astrologer.experience}years exp</Text>
                <Text style={styles.price}>₹{astrologer.rate}/min</Text>
                {astrologer.status === "free" ? (
                    <TouchableOpacity style = {styles.freeBtn}>
                        <Text style={styles.btnText}>5 min FREE</Text>
                        </TouchableOpacity>
                        ) : (
                    <TouchableOpacity style = {styles.busyBtn}>
                        <Text style={styles.btnText}>Busy</Text>
                    </TouchableOpacity>
                 )}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      backgroundColor: "#FFF",
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      alignItems: "center",
      elevation: 3,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    info: {
      marginLeft: 10,
      flex: 1,
    },
    name: {
      fontWeight: "bold",
      fontSize: 16,
    },
    details: {
      fontSize: 12,
      color: "#6B7280",
    },
    exp: {
      fontSize: 12,
      color: "#4B5563",
    },
    price: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#2C3E50",
    },
    freeBtn: {
      backgroundColor: "#2ECC71",
      padding: 6,
      borderRadius: 5,
      alignItems: "center",
    },
    busyBtn: {
      backgroundColor: "#E74C3C",
      padding: 6,
      borderRadius: 5,
      alignItems: "center",
    },
    btnText: {
      color: "#FFF",
      fontSize: 12,
      fontWeight: "bold",
    },
  });
export default AstroCard;
