import React from "react";
import {TextInput, StyleSheet, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function search(){

    return <>

    <View style={styles.searchBar}>

    <Ionicons style={styles.icon} name="search" size={24} color="#000"/>
    <TextInput style={styles.input} placeholder="Busca"></TextInput>
    
    </View>

    </>

}

const styles = StyleSheet.create({

searchBar: {
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
    height: 36,
    padding: 8,
    borderWidth: 2,
    borderColor: "#A31621",
    backgroundColor: "#CED3DC",
    borderRadius: 8,
    marginBottom: 24,
    flexDirection: "row",
    gap: 8,

    
},

input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "RalewaySemiBold",
    height: 36,
    alignSelf: "center",
    //borderLeftWidth: 1,
    //paddingLeft: 4,
    //borderColor: "#000",
},

icon: {
    lineHeight: 16,
}

})