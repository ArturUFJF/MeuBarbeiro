import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function ModalPost(){
    //Declaração de estados
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [advantages, setAdvantages] = useState("");
    const [contact, setContact] = useState("");

    //POST de dados para a API
    const submitData = async () => {
        const barberData = {
          name: name,
          descripition: description,
          advantages: advantages,
          contact: contact,
        };
    
        try {
          const response = await axios.post('https://treinamentoapi.codejr.com.br/api/artur/barberShop', barberData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        console.log(response);  // Verificar resposta completa da API
        console.log(response.status);  // Verificar status code
        console.log(response.data);  // Verificar dados retornados
    
          if (response.status === 201) {
            Alert.alert("Sucesso", "Nova barbearia cadastrada!");
          } else {
            Alert.alert("Erro", "Não foi possível cadastrar a barbearia.");
          }
        } catch (error) {
          console.error(error);
          Alert.alert("Erro", "Ocorreu um erro ao cadastrar a barbearia.");
        }
      };


    return <>
    <View>

    <TextInput style={styles.inputTeste} placeholder="Nome" value={name} onChangeText={setName}/>
    <TextInput style={styles.inputTeste} placeholder="Descrição" value={description} onChangeText={setDescription}/>
    <TextInput style={styles.inputTeste} placeholder="Vantagens" value={advantages} onChangeText={setAdvantages}/>
    <TextInput style={styles.inputTeste} placeholder="Contato" value={contact} onChangeText={setContact}/>

    <Pressable style={styles.buttonTeste} onPress={submitData}>
        <Text>Enviar</Text>
        </Pressable>

    </View>

    </>
}

const styles = StyleSheet.create({
    inputTeste: {
        alignSelf: "center",
        fontFamily: "SquadaOne",
        fontSize: 20,
        paddingVertical: 40,
    },

    buttonTeste: {
        alignSelf: "center",
        fontFamily: "SquadaOne",
        fontSize: 20,
        paddingVertical: 20,
        backgroundColor: "blue",
    }
})