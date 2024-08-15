import React from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";

export default function login(){
    return <>
    
    <SafeAreaView style={styles.body}>
        <Text style={styles.welcome}>Bem-vindo(a)!</Text>
    
    <View style={styles.loginView}>
        
        <Text style={styles.fieldName}> Email</Text>
        <TextInput style={styles.field}/>
        <Text style={styles.fieldName}> Senha</Text>
        <TextInput style={styles.field}/>

    </View>
    
    </SafeAreaView>

    </>
}

const styles = StyleSheet.create({

    body: {
      alignItems: "center",  
    },

    welcome: {
        paddingTop: 28,
        fontFamily: "SquadaOne",
        fontSize: 36,
    },

    loginView: {
        marginTop: 64,
        width: "80%",
    },

    fieldName: {
        fontFamily: "OswaldSemiBold",
        fontSize: 20,
        paddingBottom: 4,
    },

    field: {
        alignSelf: "center",
        width: "100%",
        height: 48,
        borderWidth: 2,
        borderColor: "#4E8098",
        backgroundColor: "#CED3DC",
        borderRadius: 8,
        marginBottom: 24,
    },
})