import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SearchIcon from "../../assets/search";
import WalletIcon from "../../assets/wallet.png"; 
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        <SearchIcon style={styles.searchIcon} />
        <View style={styles.balanceContainer}>
          <Image source={WalletIcon} style={styles.walletIcon} />
          <Text style={styles.balance}>₹ 234</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    backgroundColor: "#F4A261", 
    padding: 15 
  },
  title: { fontSize: 20, fontWeight: "bold" },
  rightContainer: { flexDirection: "row", alignItems: "center" },
  searchIcon: { marginRight: 10 },
  balanceContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFF", 
    padding: 5, 
    borderRadius: 10 
  },
  walletIcon: { width: 16, height: 16, marginRight: 5, resizeMode: "contain" },
  balance: { color: "#E74C3C", fontWeight: "bold" },
});

export default Header;
