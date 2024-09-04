import React from "react";
import {ScrollView, View, Text, StyleSheet, SafeAreaView, TextInput, Pressable} from "react-native";

export default function login(){
    return <>

    <ScrollView>

    <SafeAreaView style={styles.body}>
        <Text style={styles.welcome}>Bem-vindo(a)!</Text>
    
    <View style={styles.loginView}>
        
        <Text style={styles.fieldName}> Email</Text>
        <TextInput maxLength={70} style={styles.field}/>
        <Text style={styles.fieldName}> Senha</Text>
        <TextInput maxLength={16} secureTextEntry style={styles.field}/>

        <Pressable style={styles.button}>
            {
                // adicionar simulação de validação depois
            }
            <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

    </View>
    
    </SafeAreaView>
    </ScrollView>
     
    </>
}


const styles = StyleSheet.create({

    body: {
      alignItems: "center",  
    },

    welcome: {
        paddingTop: 28,
        fontFamily: "SquadaOne",
        fontSize: 48,
    },

    loginView: {
        marginTop: "10%",
        width: "80%",
    },

    fieldName: {
        fontFamily: "OswaldSemiBold",
        fontSize: 24,
        paddingBottom: 4,

    },

    field: {
        alignSelf: "center",
        width: "100%",
        padding: 8,
        height: 52,
        borderWidth: 2,
        borderColor: "#4E8098",
        backgroundColor: "#CED3DC",
        borderRadius: 8,
        marginBottom: 24,
    },

    button: {
        width: "100%",
        marginTop: 28,
        marginBottom: 40,
        height: 56,
        backgroundColor: "#A31621",
        borderRadius: 16,
        justifyContent: "center",
        
        shadowColor: "#000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5, 
    },

    buttonText: {
        fontFamily: "RalewayBlack",
        textAlign: "center",
        color: "#FCF7F8",
        fontSize: 26,
    }

})