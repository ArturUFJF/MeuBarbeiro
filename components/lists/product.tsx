import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Product(){
    return <>
    
    <View style={styles.body}>

    <Image style={styles.image}
    source={require("../../assets/images/BarbeariaMineira.jpg")}    
    />

    <View style={styles.textBody}>
        <Text style={styles.barberShopText}>Barbearia Mineira</Text>
        <Text style={styles.priceText}>R$ 40,00</Text>
        <Text style={styles.serviceText}>Corte - 10:30h</Text>
    </View>

    <View style={styles.rightCornerBody}>
        <Text style={styles.dateText}>18/08/2024</Text>
        <Pressable style={styles.trashCan}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="#FFF"/>
        </Pressable>
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
        height: 100,
        padding: 4,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: "black",
        justifyContent: "space-around",

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
        padding: 4,
    },

    rightCornerBody: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },

    trashCan: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A31621",
    },

    image: {
        marginLeft: 4,
        borderRadius: 360,
        width: 64,
        height: 64,
        alignSelf: "center",
    },

    barberShopText: {
        fontFamily: "SquadaOne",
        fontSize: 18,
        paddingLeft: 16,
    },  

    dateText: {
        fontFamily: "SquadaOne",
        fontSize: 16,
        paddingLeft: 4,
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
