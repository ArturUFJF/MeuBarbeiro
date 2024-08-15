import React from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from "react-native";

export default function login(){
    return <>
    
    <SafeAreaView style={styles.body}>
        <Text style={styles.welcome}>Bem-vindo(a)!</Text>
    
    <View style={styles.loginView}>
        
        <Text style={styles.fieldName}> Email</Text>
        <TextInput style={styles.field}/>
        <Text style={styles.fieldName}> Senha</Text>
        <TextInput style={styles.field}/>

        <TouchableOpacity style={styles.button}>
            {
                // adicionar simulação de validação depois
            }
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

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
        fontSize: 40,
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
        padding: 8,
        height: 48,
        borderWidth: 2,
        borderColor: "#4E8098",
        backgroundColor: "#CED3DC",
        borderRadius: 8,
        marginBottom: 24,
    },

    button: {
        width: "100%",
        marginTop: 28,
        height: 56,
        backgroundColor: "#A31621",
        borderRadius: 16,
        justifyContent: "center",
    },

    buttonText: {
        fontFamily: "RalewayBlack",
        textAlign: "center",
        color: "#FCF7F8",
        fontSize: 26,
    }

})