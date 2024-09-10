import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBarbershop } from '../../app/redux/slices/barbershopSlice'; 
import AdminBarbershop from "../lists/adminbarbershop";
import ModalPostBarbershop from "../admin/modalPostBarbershop";
import ModalPostProduct from "../admin/modalPostProduct";

export default function AdminScreen() {
  const dispatch = useDispatch();
  const barbershop = useSelector((state) => state.barbershop.barbershops);
  const status = useSelector((state) => state.barbershop.status);
  
  // Estados para controlar a visibilidade dos modais
  const [modalPostVisible, setModalPostVisible] = useState(false);
  const [modalPostProductVisible, setModalPostProductVisible] = useState(false);

  // Busca barbearias no início
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBarbershop());
    }
  }, [status, dispatch]);

  // Polling para verificar atualizações no banco de dados
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBarbershop()); 
    }, 25000); // atualizações a cada 25 segundos

    return () => clearInterval(interval); 
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonBody}>
          <Pressable
            style={styles.buttonBarbershop}
            onPress={() => setModalPostVisible(true)} // Abre o modal ao pressionar o botão
          >
            <Text style={styles.buttonText}>Nova Barbearia</Text>
          </Pressable>

          <Pressable
            style={styles.buttonProduct}
            onPress={() => setModalPostProductVisible(true)}
          >
            <Text style={styles.buttonText}>Novo Produto</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.title}>Barbearias</Text>

      {status === 'loading' && <Text>Carregando...</Text>}
      {status === 'failed' && <Text>Erro ao carregar barbearias</Text>}

      <FlatList
        contentContainerStyle={styles.body}
        data={barbershop}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AdminBarbershop barberShop={item} />}
      />

      <ModalPostBarbershop
        visible={modalPostVisible}
        onClose={() => setModalPostVisible(false)} // Fecha o modal
      />

      <ModalPostProduct
        visible={modalPostProductVisible}
        onClose={() => setModalPostProductVisible(false)} // Fecha o modal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    shadowOffset: { width: 2, height: 4 },
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
    shadowOffset: { width: 2, height: 4 },
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
});