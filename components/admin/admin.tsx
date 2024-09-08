import React, {useEffect, useState} from "react";
import {ScrollView, View, Text, Pressable, StyleSheet} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Search from "../search";
import AdminBarbershop from "../lists/adminbarbershop";
import axios from "axios";

export default function AdminScreen(){

    const navigation = useNavigation<NavigationProp<any>>();
    const [barbershops, setBarbershops] = useState([]); // Estado para armazenar barbearias

    useEffect(() => {
        const fetchBarbearias = async () => {
            try {
                const response = await axios.get("https://treinamentoapi.codejr.com.br/api/artur/barberShop");
                setBarbershops(response.data); // Supondo que a resposta tenha um array chamado "barberShops"
                console.log
            } catch (error) {
                console.error("Erro ao buscar barbearias:", error);
            }
        };
        fetchBarbearias();
    }, []);

    return <>
    <View style={styles.header}>
    <Pressable style={styles.button} onPress={() => navigation.navigate("ModalCriar")}>
        <Text style={styles.buttonText}>Nova Barbearia</Text>
    </Pressable>

    <Text style={styles.title}>Barbearias</Text>
    
    </View>
    <Search/>

    <ScrollView style={styles.body}>
    {barbershops.map((barbershop, index) => (
        <AdminBarbershop key={index} barbershop={barbershop} /> 
                ))}
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        width: "100%",
        height: "16%",
    },

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
        fontSize: 28,
        marginLeft: 20,
        marginTop: 28,
    },

    body: {
        paddingTop: 8,
        paddingBottom: 20,
        
    },
})