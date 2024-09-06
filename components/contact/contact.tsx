import React from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";

export default function Contact(){
    return <>

    <View style={styles.header}>
        <Image
          source={require('../../assets/images/LogoPreta.png')} // Logo
          style={styles.logo}
        />
      </View>
    
    <Text>Telinha di leves</Text>
    
    </>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FCF7F8',
        padding: 20,
        alignItems: 'center',
        borderBottomColor: "#A31621",
        borderBottomWidth: 2,
      },

      logo: {
        width: "80%",
        height: "40%",
      }
})