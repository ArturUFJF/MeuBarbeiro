import React, {useEffect, useState} from "react";
import {ScrollView, View, Text, Pressable, StyleSheet, FlatList} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import AdminBarbershop from "../lists/adminbarbershop";


export default function AdminScreen(){

    const navigation = useNavigation<NavigationProp<any>>();
    const [barbershop, setBarbershop] = useState([]); // Estado para armazenar cada item barbearia

        const fetchBarbershop = async () => {
            try {
                const newBarbershops = [];
                let id = 26;
                while(id<1000){
                    const response = await fetch(`https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        }
                    });
                    const data = await response.json();
                    console.log(data);
                    console.log(data.barberShop);
                    
                    if (data && data.barberShop) {
                        newBarbershops.push(data.barberShop); // Adiciona a barbearia ao array temporário
                    }

                    if(data.status!=200){
                        break;
                        }
                        id++;
                }
                setBarbershop(newBarbershops); // Atualiza o estado com todas as barbearias
                }
             catch (error) {
                console.error("Erro ao buscar barbearias:", error);
            }
        };
        
        useEffect(() => {
            fetchBarbershop(); // Atualiza a lista toda vez que a tela receber foco
        }, []);

    return <>

    <ScrollView>
    <View style={styles.header}>

        <View style={styles.buttonBody}>
    <Pressable style={styles.buttonBarbershop} onPress={() => navigation.navigate("ModalPostBarbershop")}>
        <Text style={styles.buttonText}>Nova Barbearia</Text>
    </Pressable>
    
    <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate("ModalPostProduct")}>
        <Text style={styles.buttonText}>Novo Produto</Text>
    </Pressable>
        </View>

    </View>
    
    {/* <Search/> */}

    <Text style={styles.title}>Barbearias</Text>  

    <ScrollView style={styles.body}>
        <FlatList data={barbershop}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => <AdminBarbershop barberShop={item} />} // Renderiza cada item
            />
    </ScrollView>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        width: "100%",
        height: "20%",
        justifyContent: "space-between",
        paddingBottom: 8,
        borderBottomWidth: 1,
        backgroundColor: "#FFFFFF",
    },

    buttonBarbershop: {
        borderRadius: 16,
        alignSelf: "center",
        width: "40%",
        height: "100%",
        backgroundColor: "#90C2E7",
        justifyContent: "center",
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        
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

    buttonProduct: {
        borderRadius: 16,
        alignSelf: "center",
        width: "40%",
        height: "100%",
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        padding: 4,
        
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

    buttonBody: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        paddingTop: "4%",
        paddingBottom: 0,
        gap: 16,    
    },

    buttonText: {
        fontFamily: "RalewayBlack",
        textAlign: "center",
        alignSelf: 'center',
        fontSize: 20,
        color: "#FCF7F8",
    },

    title: {
        fontFamily: "SquadaOne",
        fontSize: 32,
        marginBottom: 8,
        alignSelf: 'center',
        marginTop: "4%",
        textDecorationLine: "underline",
        textDecorationColor: "#A31621",
    },

    body: {
        paddingTop: 4,
        paddingBottom: 24,
        borderBottomWidth: 2,
        
    },
})