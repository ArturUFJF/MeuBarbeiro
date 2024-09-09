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
            let id = 15;

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
        fetchBarbershop();
    }, []); // O array vazio [] como segundo argumento garante que o fetch seja feito apenas uma vez ao montar o componente

    return <>

        <Search/>
        
    <FlatList contentContainerStyle={styles.list} data={barbershop} // Passa o array de barbearias como dados
            keyExtractor={(item) => item.id.toString()} // Extrai uma chave única de cada item
            renderItem={({ item }) => <Barbershop barberShop={item} />} // Renderiza cada item usando o componente AdminBarbershop e passa a barbearia como prop
            />

    </>
}

const styles = StyleSheet.create({

    list: {
        display: "flex",
        marginHorizontal: "auto",
        justifyContent: "center",
        width: "92%",
        flexWrap: "wrap",
        flexDirection: "row",
        rowGap: 16,
        columnGap: 16,
        paddingBottom: 60,
    }
})