import React from "react";
import {View, StyleSheet} from "react-native";
import Product from "../lists/product";
import Search from "../search";

export default function home(){

    return <>
    
        <Search/>
    <View style={styles.list}>

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