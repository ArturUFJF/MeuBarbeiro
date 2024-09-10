import React from "react";
import { Image, View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";

export default function Product({ barberShop }:any){

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR'); // Formato dia/mês/ano
    };

    const navigation = useNavigation<NavigationProp<any>>();
    
    const deleteItem = async (id: number) => {
        try {
                  // Realizar a requisição DELETE
                  const response = await axios.delete(
                    `https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`
                  );
                  
                  console.log(response);

                  if (response.status === 200) {
                    console.log("Sucesso! Barbearia deletada!");

                  } else {
                    console.log("ERRO! Barbearia não deletou!");
                  }
                }
                catch{
                  console.log("Erro ao deletar barbearia:");
                }
        }

    return <>
    
    <View style={styles.body}>

    <Text style={styles.dateText}>ID: {barberShop.id}</Text>

    <View style={styles.textBody}>
        <Text style={styles.barberShopText}>{barberShop.name}</Text>
        <Text style={styles.dateText}>{formatDate(barberShop.created_at)}</Text>
    </View>

    <View style={styles.rightCornerBody}>
        <Pressable style={styles.editIcon} onPress={() => navigation.navigate("ModalPut", {id: barberShop.id})}>
            <Feather name="edit" size={20} color="#FFF"/>
        </Pressable>

        <Pressable style={styles.trashCan} onPress={() => deleteItem(barberShop.id)}>
            <MaterialCommunityIcons name="trash-can-outline" size={20} color="#FFF"/>
        </Pressable>
    </View>


    </View>
    
    </>

}

const styles = StyleSheet.create({
    body: {
        marginTop: 20, 
        backgroundColor: "#FCF7F8",
        display: "flex",
        width: "92%",
        height: 100,
        padding: 4,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "space-around",

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,   
    },

    textBody: {
        width: "48%",
        height: "96%",
        justifyContent: "space-around",
    },

    rightCornerBody: {
        display: "flex",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 4,
        gap: 8,
        justifyContent: "space-around",
    },

    trashCan: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A31621",
    },

    editIcon: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#90C2E7",
    },

    barberShopText: {
        fontFamily: "SquadaOne",
        fontSize: 18,
        paddingLeft: 8,
        paddingRight: 8,
    },  

    dateText: {
        fontFamily: "SquadaOne",
        fontSize: 16,
        color: "#A31621",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
    },

    serviceText: {
        fontFamily: "OswaldRegular",
        color: "#272D2D",
        fontSize: 14,
        paddingLeft: 16,
    }
})
