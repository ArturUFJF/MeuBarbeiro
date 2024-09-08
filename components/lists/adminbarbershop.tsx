import React from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export default function Product({ barbershop }){
    return <>
    
    <View style={styles.body}>

    <Image style={styles.image}
    source={require("../../assets/images/BarbeariaMineira.jpg")}    
    />

    <View style={styles.textBody}>
        <Text style={styles.barberShopText}>{barbershop.name}</Text>
        <Text style={styles.dateText}>{barbershop.created_at}</Text>
    </View>

    <View style={styles.rightCornerBody}>
        <Pressable style={styles.eyeIcon}>
            <Feather name="eye" size={20} color="#FFF"/>
        </Pressable>

        <Pressable style={styles.editIcon}>
            <Feather name="edit" size={20} color="#FFF"/>
        </Pressable>

        <Pressable style={styles.trashCan}>
            <MaterialCommunityIcons name="trash-can-outline" size={20} color="#FFF"/>
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
        width: "92%",
        height: "auto",
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
        height: "96%",
        justifyContent: "space-around",
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

    trashCan: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A31621",
    },

    editIcon: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#90C2E7",
    },

    eyeIcon: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#272D2D",
    },

    image: {
        marginLeft: 4,
        borderRadius: 360,
        width: 52,
        height: 52,
        alignSelf: "center",
    },

    barberShopText: {
        fontFamily: "SquadaOne",
        fontSize: 18,
        paddingLeft: 8,
        paddingRight: 8,
    },  

    dateText: {
        fontFamily: "SquadaOne",
        fontSize: 16,
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
