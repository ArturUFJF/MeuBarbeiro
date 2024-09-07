import React from "react";
import {ScrollView, View, Text, Pressable, StyleSheet, Image, Dimensions} from "react-native";
import Search from "../search";
import Service from "../lists/service";

export default function IndividualBarberShop(){
    return <>
          <Text style={styles.title}>Barbearia Mineira</Text>

    <ScrollView>
        <Image
          source={require('../../assets/images/BarbeariaMineira.jpg')}
          style={styles.image}
        />


    <View style={styles.body}>
        <Text style={styles.description}>Um lugar singular para pessoas plurais! </Text>
    </View>
    
        <Text style={styles.titleServices}>Serviços</Text>
        <Search/>

        <Service/>
        <Service/>
        <Service/>  
        <Service/>
        <Service/>
        <Service/>
    </ScrollView>
    </>
}

const windowHeight = Dimensions.get('window').height; // Altura da tela
const height22vh = windowHeight * 0.22; // 22% da altura da tela

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
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
        fontSize: 32,
        alignSelf: "center",
        marginVertical: 12,
        borderBottomWidth: 4,
        borderBottomColor: "#A31621",
    },

    titleServices: {
        fontFamily: "SquadaOne",
        fontSize: 28,
        marginTop: 16,
        marginLeft: "5%",
        textDecorationLine: "underline",
        textDecorationColor: "#A31621",

    },

    body: {
        paddingTop: 8,
    },

    image: {
        width: "100%",
        height: height22vh,
      },

    description: {
        width: "100%",
        color: "#272D2D",
        textAlign: "center",
        backgroundColor: "#FCF7F8",
        borderBottomWidth: 1,
        paddingTop: 0,
        paddingBottom: 8,
        fontFamily: "OswaldRegular",
        fontSize: 20,
    }
})