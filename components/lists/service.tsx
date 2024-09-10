import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";


export default function Service({ product }:any){
    return <>
    
    <View style={styles.body}>

    <View style={styles.leftCornerBody}>

    <Image style={styles.image}
    source={require("../../assets/images/LogoPreta.png")}    
    />

    <View style={styles.textBody}>
        <Text style={styles.barberShopText}>{product.name}</Text>
        <Text style={styles.dateText}> R${product.price}</Text>
    </View>

    </View>


    <View style={styles.rightCornerBody}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
        </Pressable>
    </View>


    </View>
    
    </>

}

const styles = StyleSheet.create({
    body: {
        marginBottom: 20, 
        backgroundColor: "#FCF7F8",
        display: "flex",
        width: "92%",
        height: 80,
        padding: 4,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
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

    textBody: {
        marginLeft: 12,
        height: "100%",
        gap: 4,
        justifyContent: "space-around",
    },

    leftCornerBody:{
        flexDirection: "row",
    },

    rightCornerBody: {
        display: "flex",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 4,
        gap: 8,
        justifyContent: "space-around",
    },

    button: {
        width: 80,
        height: 44,
        marginRight: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A31621",
    },

    buttonText: {
        fontFamily: "RalewayBlack",
        fontSize: 16,
        color: "#FCF7F8",
    },

    image: {
        marginLeft: 4,
        borderRadius: 360,
        borderWidth: 2,
        width: 52,
        height: 52,
        alignSelf: "center",
    },

    barberShopText: {
        fontFamily: "SquadaOne",
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 8,
    },  

    dateText: {
        fontFamily: "SquadaOne",
        fontSize: 18,
        color: "#A31621",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
    },

    serviceText: {
        fontFamily: "OswaldRegular",
        color: "#272D2D",
        fontSize: 14,
        paddingLeft: 16,
    }
})
