import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView, Modal } from "react-native";
import axios from "axios";

export default function ModalPostProduct( {visible, onClose} ) {
  // Declaração de estados
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(""); // Preço do produto
  const [id, setId] = useState(""); // Preço do produto

  // POST de dados para a API
  const submitData = async () => {
    const productData = {
      name: productName,
      price: parseFloat(price), // Convertendo o preço para número
      barber_shop_id: parseInt(id),
    };

    try {
      const response = await axios.post('https://treinamentoapi.codejr.com.br/api/artur/product', productData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);  // Verificar resposta completa da API

      if (response.status === 200) {
        Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
        onClose(); // Fechar o modal após o sucesso
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar o produto.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar o produto.");
    }
  };

  return <>
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >

    <View style={styles.modalContainer}>
      <ScrollView style={styles.modalContent}>
        <Text style={styles.modalTitle}>Cadastrar Produto</Text>

        <TextInput
          style={styles.input}
          placeholder="ID da Barbearia"
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
          />

        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={productName}
          onChangeText={setProductName}
          />


        <TextInput
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          />

        <Pressable style={styles.submitButton} onPress={submitData}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </Pressable>
      </ScrollView>
    </View>
</Modal>
  </>
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    width: "90%",
    maxHeight: "70%",
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalTitle: {
    fontFamily: "SquadaOne",
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#A31621",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#4E8098",
    backgroundColor: "#CED3DC",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "RalewayBlack",
    textAlign: "center",
    color: "#FCF7F8",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#A31621',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  closeButton:{
    backgroundColor: "#000000",
    marginTop: 28,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});