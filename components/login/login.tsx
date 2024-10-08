import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TextInput, Pressable, Modal } from "react-native";
import { useAuth } from "../../app/context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const touchLogin = () => {
    if (email === "admin@teste.com" || password === "123456") {
      login();
    } else {
      setErrorMessage("Usuário não encontrado");
      setModalVisible(true);
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scroll}>
        <SafeAreaView style={styles.body}>
          <Text style={styles.welcome}>Bem-vindo(a)!</Text>
          <View style={styles.loginView}>
            <Text style={styles.fieldName}>Email</Text>
            <TextInput
              maxLength={70}
              style={styles.field}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Text style={styles.fieldName}>Senha</Text>
            <TextInput
              maxLength={16}
              secureTextEntry
              style={styles.field}
              value={password}
              onChangeText={setPassword}
            />

            <Pressable style={styles.button} onPress={touchLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* Modal para exibir mensagens de erro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    paddingBottom: "8%",
    fontFamily: "SquadaOne",
    fontSize: 48,
  },
  loginView: {
    width: "80%",
  },
  fieldName: {
    fontFamily: "OswaldSemiBold",
    fontSize: 24,
    paddingBottom: 4,
  },
  field: {
    alignSelf: "center",
    width: "100%",
    padding: 8,
    height: 52,
    borderWidth: 2,
    borderColor: "#4E8098",
    backgroundColor: "#CED3DC",
    borderRadius: 8,
    marginBottom: 24,
  },
  button: {
    width: "100%",
    marginTop: 28,
    marginBottom: 40,
    height: 56,
    backgroundColor: "#A31621",
    borderRadius: 16,
    justifyContent: "center",
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
    textAlign: "center",
    color: "#FCF7F8",
    fontSize: 26,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semi-transparente
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  modalText: {
    fontFamily: "SquadaOne",
    fontSize: 32,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#A31621",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontFamily: "RalewayBlack",
    color: "#FCF7F8",
    fontSize: 18,
  },
});