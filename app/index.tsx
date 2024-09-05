import React from "react";
import {ScrollView, View, Text, StatusBar, SafeAreaView, StyleSheet} from "react-native";
import AppLoading from "expo-app-loading";
import {useFonts, Raleway_600SemiBold, Raleway_700Bold, Raleway_900Black} from "@expo-google-fonts/raleway";
import {SquadaOne_400Regular} from "@expo-google-fonts/squada-one";
import {Oswald_300Light, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold} from "@expo-google-fonts/oswald";
import NavbarScreen from "../components/navbar/navbar";
import HomeScreen from "../components/home/home"
import LoginScreen from "../components/login/login";
import ScheduleScreen from "../components/schedule/schedule";
import { createStackNavigator } from "@react-navigation/stack";

export default function Index(){

    const Stack = createStackNavigator();
    
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
    
    if(!LoadFont){
    return <AppLoading />
}

return<>

<NavbarScreen/>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Schedule" component={ScheduleScreen}/>
    </Stack.Navigator>
</>

}