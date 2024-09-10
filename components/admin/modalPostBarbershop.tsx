import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView } from "react-native";
import axios from "axios";

export default function ModalPostBarbershop() {
  // Declaração de estados
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [advantages, setAdvantages] = useState<string[]>([]); // Lista de vantagens
  const [contact, setContact] = useState("");
  const [advantageInput, setAdvantageInput] = useState(""); // Input temporário de vantagem

  // Adicionar uma vantagem ao pressionar Enter
  const handleAdvantageSubmit = () => {
    if (advantageInput.trim()) {
      setAdvantages([...advantages, `• ${advantageInput.trim()}`]);
      setAdvantageInput(""); // Limpar o campo após adicionar
    }
  };

  // POST de dados para a API
  const submitData = async () => {
    const barberData = {
      name: name,
      descripition: description,
      advantages: advantages.join("\n"), // Formatando vantagens como string
      contact: contact,
    };

    try {
      const response = await axios.post('https://treinamentoapi.codejr.com.br/api/artur/barberShop', barberData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);  // Verificar resposta completa da API
      console.log(response.status);  // Verificar status code
      console.log(response.data);  // Verificar dados retornados

      if (response.status === 201) {
        Alert.alert("Sucesso", "Nova barbearia cadastrada com sucesso!");
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar a barbearia.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar a barbearia.");
    }
  };

  return (
    <ScrollView style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Cadastrar Barbearia</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome da Barbearia"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Contato"
          value={contact}
          onChangeText={setContact}
        />

        {/* Campo de vantagens */}
        <TextInput
          style={styles.input}
          placeholder="Adicionar Vantagem"
          value={advantageInput}
          onChangeText={setAdvantageInput}
          onSubmitEditing={handleAdvantageSubmit} // Ao pressionar Enter
        />
        <Pressable style={styles.addButton} onPress={handleAdvantageSubmit}>
          <Text style={styles.buttonText}>Adicionar Vantagem</Text>
        </Pressable>

        {/* Exibir lista de vantagens */}
        {advantages.length > 0 && (
          <View style={styles.advantagesList}>
            {advantages.map((adv, index) => (
              <Text key={index} style={styles.advantageItem}>{adv}</Text>
            ))}
          </View>
        )}

        <Pressable style={styles.submitButton} onPress={submitData}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  modalContent: {
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
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
    color: '#fff',
    fontSize: 16,
  },
  advantagesList: {
    marginBottom: 20,
  },
  advantageItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});