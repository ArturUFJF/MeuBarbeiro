import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function Product(){
    return <>
    
    <View style={styles.body}>

    <Image style={styles.image}
    source={require("../../assets/images/BarbeariaMineira.jpg")}    
    />

    <View >
    <Text style={styles.barberShopText}>Barbearia Mineira</Text>
    <Text style={styles.priceText}>R$ 40,00</Text>
    <Text style={styles.serviceText}>Corte - 10:30h</Text>
    </View>


    </View>
    
    </>

}
const styles = StyleSheet.create({
    body: {
        marginTop: 20, 
        backgroundColor: "#FCF7F8",
        display: "flex",
        width: "88%",
        height: "10%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: "black",

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,   
    },

    image: {
        borderRadius: 360,
        width: "16%",
        height: "80%",
        alignSelf: "center",
    },

    barberShopText: {
        fontFamily: "SquadaOne",
        fontSize: 18,
        paddingLeft: 16,
    },  

    priceText: {
        fontFamily: "SquadaOne",
        fontSize: 16,
        color: "#A31621",
        paddingLeft: 16,
        paddingTop: 4,
    },

    serviceText: {
        fontFamily: "OswaldRegular",
        color: "#272D2D",
        fontSize: 14,
        paddingLeft: 16,
    }
})
