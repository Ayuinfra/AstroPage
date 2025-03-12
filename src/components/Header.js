import { react } from 'react';
  import { View, Text, StyleSheet } from "react-native";

  const Header = () => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>{title}</Text>
        </View>

    );
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#F4A261",
      padding: 15,
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFF",
    },
  });

  export default Header;