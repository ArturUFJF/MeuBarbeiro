import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView } from "react-native";
import axios from "axios";

export default function ModalPut({ route }: any) {
  const { id } = route.params; // ID da barbearia para edição

  // Declaração de estados
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [advantages, setAdvantages] = useState<string[]>([]); // Lista de vantagens
  const [contact, setContact] = useState("");
  const [advantageInput, setAdvantageInput] = useState(""); // Input temporário de vantagem

  // Carregar os dados da barbearia ao montar o componente
  useEffect(() => {
    const fetchBarberData = async () => {
      try {
        const response = await axios.get(`https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`);
        const data = response.data;
        setName(data.name);
        setDescription(data.descripition);
        setAdvantages(data.advantages.split("\n"));
        setContact(data.contact);
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Ocorreu um erro ao carregar os dados da barbearia.");
      }
    };

    fetchBarberData();
  }, [id]);

  // Adicionar uma vantagem
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

  // Função para enviar a edição para a API
  const submitData = async () => {
    const barberData = {
      name: name,
      descripition: description,
      advantages: advantages.join("\n"), // Formatando vantagens como string
      contact: contact,
    };

    try {
      const response = await axios.put(`https://treinamentoapi.codejr.com.br/api/artur/barberShop/${id}`, barberData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);  // Verificar resposta completa da API
      console.log(response.status);  // Verificar status code
      console.log(response.data);  // Verificar dados retornados

      if (response.status === 200) {
        Alert.alert("Sucesso", "Barbearia atualizada com sucesso!");
      } else {
        Alert.alert("Erro", "Não foi possível atualizar a barbearia.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar a barbearia.");
    }
  };

  return (
    <ScrollView style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Editar Barbearia</Text>

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
        <Pressable style={styles.resetButton} onPress={nullAdvantage}>
          <Text style={styles.buttonText}>Resetar Vantagens</Text>
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

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
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

  buttonText: {
    fontFamily: "RalewayBlack",
    textAlign: "center",
    color: "#FCF7F8",
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
    backgroundColor: '#A31621',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,

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