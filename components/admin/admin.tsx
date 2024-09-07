import React from "react";
import {ScrollView, View, Text, Pressable, StyleSheet} from "react-native";
import Search from "../search";
import AdminBarbershop from "../lists/adminbarbershop";

export default function AdminScreen(){
    return <>
    <View style={styles.header}>
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Nova Barbearia</Text>
    </Pressable>

    <Text style={styles.title}>Barbearias</Text>
    
    </View>
    <Search/>

    <ScrollView style={styles.body}>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
        <AdminBarbershop/>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        width: "100%",
        height: "16%",
    },

    button: {
        marginTop: 16,
        borderRadius: 16,
        alignSelf: "center",
        width: "56%",
        height: "48%",
        backgroundColor: "#90C2E7",
        justifyContent: "center",
        
        shadowColor: "#000000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.72,
        shadowRadius: 4.5,
        elevation: 10,

        textShadowColor: '#000000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 4,
    },

    buttonText: {
        fontFamily: "RalewayBlack",
        textAlign: "center",
        fontSize: 25,
        color: "#FCF7F8",
    },

    title: {
        fontFamily: "SquadaOne",
        fontSize: 28,
        marginLeft: 20,
        marginTop: 28,
    },

    body: {
        paddingTop: 8,
        paddingBottom: 20,
        
    },
})