import React from "react";
import {Text, View, StyleSheet, Dimensions, Image, Pressable} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function product(){

    const navigation = useNavigation<NavigationProp<any>>();

return <>

    <Pressable style={styles.body} onPress={() => navigation.navigate("IndividualBarberShop")}>

    <Image style={styles.image}
    source={require("../../assets/images/BarbeariaMineira.jpg")}    
    />

    <Text style={styles.title}>Barbearia Mineira</Text>

    <View style={styles.spacing}> 
    <Text style={styles.description}>Barbearia especializada em cortes casuais masculinos da tendência.</Text>
    <Text style={styles.price}>R$ 30,00 - R$ 150,00</Text>
    </View>

    </Pressable>

</>
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    body: {
        borderRadius: 16,
        backgroundColor: "#CED3DC",
        width: 150,
        height: 240,
        flexDirection: "column",
        
        shadowColor: "#000",
        shadowOffset: {
        	width: 4,
        	height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.92,
        elevation: 5,
    },

    image: {
        width: "100%",
        height: "40%",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },

    title: {
        fontFamily: "SquadaOne",
        fontSize: 20,
        textAlign: "center",
        padding: 6,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },

    description: {
        fontFamily: "OswaldRegular",
        fontSize: 13,
        padding: 4,
    },

    price: {
        fontFamily: "SquadaOne",
        alignSelf: "center",
        fontSize: 16,
        padding: 12,
        color: "#A31621",
    },

    spacing: {
        flex: 1,
        justifyContent: "space-between",
    },
})