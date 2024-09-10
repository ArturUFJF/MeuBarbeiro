import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext"; 
import { Text } from "react-native";
import { useFonts, Raleway_600SemiBold, Raleway_700Bold, Raleway_900Black } from "@expo-google-fonts/raleway";
import { SquadaOne_400Regular } from "@expo-google-fonts/squada-one";
import { Oswald_300Light, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from "@expo-google-fonts/oswald";
import Navbar from "../components/navbar/navbar";
import LoginScreen from "../components/login/login"; 


export default function Index() {
  const [LoadFont] = useFonts({
    "RalewaySemiBold": Raleway_600SemiBold,
    "RalewayBold": Raleway_700Bold,
    "RalewayBlack": Raleway_900Black,
    "SquadaOne": SquadaOne_400Regular,
    "OswaldLight": Oswald_300Light,
    "OswaldRegular": Oswald_400Regular,
    "OswaldMedium": Oswald_500Medium,
    "OswaldSemiBold": Oswald_600SemiBold,
    "OswaldBold": Oswald_700Bold,
  });

  if (!LoadFont) {
    return <Text>Carregando...</Text>;
  }

  return (
    <AuthProvider> 
      <Main />
    </AuthProvider>
  );
}

function Main() {
  const { isLoggedIn } = useAuth(); // Usando o contexto de autenticação para verificar se o usuário está logado

  return isLoggedIn ? <Navbar /> : <LoginScreen />; // Renderiza a navegação se logado, caso contrário, a tela de login
}