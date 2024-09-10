import React, {useState, useEffect} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import Barbershop from "../lists/barbershop";
import Search from "../search";
import Navbar from "../navbar/navbar";
import { ScrollView } from "react-native-gesture-handler";

export default function home(){

    const [barbershop, setBarbershop] = useState([]); // Estado para armazenar cada item barbearia

    const fetchBarbershop = async () => {
        try {
            const newBarbershops = [];
            let id = 26;

            while (id < 1000) {
                const response = await fetch(`https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                });
                const data = await response.json();

                if (data && data.barberShop) {
                    // Adiciona os produtos ao objeto da barbearia
                    const barbershopWithProducts = {
                        ...data.barberShop,
                        products: data.products || [] // Se houver produtos, adicione-os
                    };
                    newBarbershops.push(barbershopWithProducts); // Adiciona a barbearia com produtos
                }

                if (data.status != 200) {
                    break;
                }
                id++;
            }
            setBarbershop(newBarbershops); // Atualiza o estado com todas as barbearias
        } catch (error) {
            console.error("Erro ao buscar barbearias:", error);
        }
    };

    useEffect(() => {
        fetchBarbershop();
    }, []);

    return <>
        
    <FlatList contentContainerStyle={styles.list} data={barbershop}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => <Barbershop barberShop={item} />} // Renderiza cada item
            />

    </>
}

const styles = StyleSheet.create({

    list: {
        display: "flex",
        marginHorizontal: "auto",
        marginTop: 28,
        justifyContent: "center",
        width: "92%",
        flexWrap: "wrap",
        flexDirection: "row",
        rowGap: 16,
        columnGap: 16,
        paddingBottom: 60,
    }
})