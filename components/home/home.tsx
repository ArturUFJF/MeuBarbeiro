import React from "react";
import {View, StyleSheet} from "react-native";
import Product from "../lists/product";
import Search from "../search";
import Navbar from "../navbar/navbar";
import { ScrollView } from "react-native-gesture-handler";

export default function home(){

    return <>

    <View style={styles.list}>
        
        <Search/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        
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