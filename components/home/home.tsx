import React from "react";
import {View, StyleSheet} from "react-native";
import Barbershop from "../lists/barbershop";
import Search from "../search";
import Navbar from "../navbar/navbar";
import { ScrollView } from "react-native-gesture-handler";

export default function home(){

    return <>

    <View style={styles.list}>
        
        <Search/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        <Barbershop/>
        
        </View>
    
    </>
}

const styles = StyleSheet.create({

    list: {
        display: "flex",
        marginHorizontal: "auto",
        justifyContent: "center",
        width: "92%",
        flexWrap: "wrap",
        flexDirection: "row",
        rowGap: 16,
        columnGap: 16,
        paddingBottom: 60,
    }
})