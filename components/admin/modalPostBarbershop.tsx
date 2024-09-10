import React, { useState } from "react";
import { Modal, View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView } from "react-native";
import axios from "axios";

export default function ModalPostBarbershop({ visible, onClose }) {
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

  const nullAdvantage = () => {
    setAdvantages([]);
    setAdvantageInput("");
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

      if (response.status === 200) {
        Alert.alert("Sucesso", "Nova barbearia cadastrada com sucesso!");
        onClose(); // Fechar o modal após o sucesso
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar a barbearia.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar a barbearia.");
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ScrollView style={styles.modalContent}>
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
          <Pressable style={styles.resetButton} onPress={nullAdvantage}>
          <Text style={styles.buttonText}>Resetar Vantagens</Text>
        </Pressable>
     
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

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    maxHeight: "80%",
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: "SquadaOne",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
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

  resetButton: {
    backgroundColor: '#90C2E7',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "RalewayBlack",
    color: "#FFF",
    fontWeight: "bold",
  },
  advantagesList: {
    marginBottom: 20,
  },
  advantageItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#A31621",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#000000",
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
});