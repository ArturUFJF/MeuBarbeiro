import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Product from "../lists/product";
import NavbarScreen from "../navbar/navbar";

export default function Schedule(){
    
    return <>
    <View style={styles.titleBody}>
    <Text style={styles.title}>Meus Agendamentos</Text>
    </View>
    
    <ScrollView style={styles.body}>

    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>

    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 8,
        paddingBottom: 20,
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