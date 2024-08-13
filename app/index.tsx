import React from "react";
import {View, Text, StatusBar, SafeAreaView, StyleSheet} from "react-native";
import AppLoading from "expo-app-loading";
import {useFonts, Raleway_900Black} from "@expo-google-fonts/raleway";
import {SquadaOne_400Regular} from "@expo-google-fonts/squada-one";
import {Oswald_300Light, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold} from "@expo-google-fonts/oswald";
import Navbar from "../components/navbar/Navbar"

export default function Index(){
    
    const [LoadFont] = useFonts({
        "RalewayBlack": Raleway_900Black,
        "SquadaOne": SquadaOne_400Regular,
        "OswaldLight": Oswald_300Light,
        "OswaldRegular": Oswald_400Regular,
        "OswaldMedium": Oswald_500Medium,
        "OswaldSemiBold": Oswald_600SemiBold,
        "OswaldBold": Oswald_700Bold,
    });
    
    const estilos = StyleSheet.create({
        teste: {
            fontFamily: "SquadaOne",
        }
    })

      if(!LoadFont){
        return <AppLoading />
      }
    
return<>
    <SafeAreaView style={{flex: 1}}>
    <StatusBar/>
    <Text style={estilos.teste}> Marcos </Text>
        <Navbar/>
    
    </SafeAreaView>
</>

}