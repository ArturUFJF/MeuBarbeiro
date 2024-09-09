import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function Schedule(){
    
    return <>
    <View style={styles.titleBody}>
    <Text style={styles.title}>Minha Agenda</Text>
    </View>
    
    <ScrollView style={styles.body}>



    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 8,
        paddingBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 5, 
    },

    titleBody: {
        paddingBottom: 24,
        borderBottomWidth: 1,
    },

    title: {
        paddingTop: 20,
        borderBottomWidth: 4,
        fontFamily: "SquadaOne",
        fontSize: 32,
        alignSelf: "center",
    },
})