import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBarbershop } from '../../app/redux/slices/barbershopSlice'; // Importa a ação
import Barbershop from "../lists/barbershop";

export default function Home() {
  const dispatch = useDispatch();
  const barbershop = useSelector((state) => state.barbershop.barbershops);
  const status = useSelector((state) => state.barbershop.status);

  // Executa o fetchBarbershop de início
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBarbershop());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBarbershop()); 
    }, 15000); // atualiza de 15 em 15 segundos
  
    return () => clearInterval(interval); 
  }, [dispatch]);

  return <>
      <Text style={styles.title}>Barbearias</Text>

      {status === 'loading' && <Text>Carregando...</Text>}
      {status === 'failed' && <Text>Erro ao carregar dados</Text>}

      <FlatList
        contentContainerStyle={styles.list}
        data={barbershop}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Barbershop barberShop={item} />} // Renderiza cada item
      />
    </>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SquadaOne",
    fontSize: 32,
    marginBottom: 8,
    alignSelf: 'center',
    marginTop: "4%",
    textDecorationLine: "underline",
    textDecorationColor: "#A31621",
  },
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
  },
});