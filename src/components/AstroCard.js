import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import VerifiedBadge from "../../assets/verify.png";
import PhoneIcon from "../../assets/phone.png";
import MsgIcon from "../../assets/chat.webp";
import StarIcon from "../../assets/star.png"; 

const AstroCard = ({ astrologer, index }) => {
  const actionButtons = [];

  let oldRate = index === 0 ? 12 : astrologer.oldRate || 12;
  let newRate = index === 0 ? "5 min FREE" : `₹${astrologer.rate || 22}/min`;
  let isFirstCard = index === 0;

  if (astrologer.status === "free") {
    actionButtons.push({ type: "call", label: isFirstCard ? "FREE" : "Call", icon: PhoneIcon });
    actionButtons.push({ type: "chat", label: isFirstCard ? "FREE" : "Chat", icon: MsgIcon });
   
  }

  return (
    <View style={styles.card}>
      <View style={[styles.imageContainer, astrologer.status === "free" ? styles.onlineBorder : styles.offlineBorder]}>
        <Image 
          source={{ uri: "https://astroera.in/public/cms-images/blogs/995003508_Connect-with-lady-astrologer-for-free-consultation-1.jpg" }} 
          style={styles.image} 
        />
        <View style={[styles.statusDot, astrologer.status === "free" ? styles.dotOnline : styles.dotOffline]} />
        <View style={styles.ratingContainer}>
          <Image source={StarIcon} style={styles.starIcon} />
          <Text style={styles.ratingText}>3.5</Text>
        </View>
      </View>

      <View style={styles.info}>
        <View style={styles.nameContainer}> 
          <Text style={styles.name}>{astrologer.name}</Text>
          <Image source={VerifiedBadge} style={styles.verifiedIcon} />
        </View>

        <Text style={styles.details}>{astrologer.skills}</Text>
        <Text style={styles.exp}>{astrologer.experience}+ Years Exp.</Text>

        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>₹{oldRate}/min</Text>
          <Text style={[styles.newPrice, isFirstCard && styles.freeText]}>{newRate}</Text>
        </View>

        {astrologer.status === "busy" ? (
          <TouchableOpacity style={styles.busyButton}>
            <View style={styles.redDot} />
            <Text style={styles.busyText}>Busy</Text>
          </TouchableOpacity>
        ) : (
          <FlatList
            data={actionButtons}
            keyExtractor={(item) => item.type}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.actionButton}>
                {item.icon && <Image source={item.icon} style={styles.iconStyle} />}  
                <Text style={[styles.buttonText, isFirstCard && styles.freeButtonText]}>{item.label}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.buttonContainer}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: "row", 
    backgroundColor: "#FFF", 
    padding: 20, 
    marginVertical: 5, 
    borderRadius: 10, 
    alignItems: "center", 
    elevation: 5,
    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 105, 
    height: 105, 
    borderRadius: 40, 
    justifyContent: "center", 
    alignItems: "center", 
    position: "relative",
    borderWidth: 2,
  },
  onlineBorder: { borderColor: "green" },
  offlineBorder: { borderColor: "red" },
  image: { 
    width: 100, 
    height: 100, 
    borderRadius: 37.5 
  },
  statusDot: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotOnline: { backgroundColor: "green" },
  dotOffline: { backgroundColor: "red" },
  info: { 
    marginLeft: 10, 
    flex: 1 
  },
  nameContainer: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  name: { 
    fontWeight: "bold", 
    fontSize: 16 
  },
  verifiedIcon: { 
    width: 16, 
    height: 16, 
    marginLeft: 5,
    resizeMode: "contain" 
  },
  details: { 
    fontSize: 12, 
    color: "#6B7280" 
  },
  exp: { 
    fontSize: 12, 
    color: "#4B5563" 
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: -20,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    color: "#333",
  },
  priceRow: { 
    flexDirection: "row", 
    alignItems: "center",
    marginVertical: 5,
  },
  oldPrice: { 
    textDecorationLine: "line-through", 
    color: "gray", 
    marginRight: 5,
    fontSize: 14,
  },
  newPrice: { 
    fontSize: 14, 
    fontWeight: "bold", 
    color: "#000" 
  },
  freeText: { 
    fontSize: 14, 
    fontWeight: "bold", 
    color: "#FF9C00"
  },
  buttonContainer: { 
    flexDirection: "row", 
    gap: 5 
  },
  actionButton: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#FFF8F2",  
    borderColor: "#E9C46A",  
    borderWidth: 1,  
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 20,
    marginHorizontal: 5,
  },
  iconStyle: {
    width: 20,
    height: 16,
    marginRight: 5, 
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 14, 
    fontWeight: "bold", 
    color: "#333",
  },
  freeButtonText: {
    color: "#FF9C00", 
    fontWeight: "bold",
  },
  busyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE8E5",
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: "#FF6B6B",
    justifyContent: "center",
    width: 90, 
  },
  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
    marginRight: 5,
  },
  busyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  }
});

export default AstroCard;
