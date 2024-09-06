import React from "react";
import {Image, Text, View, StyleSheet, Pressable, Animated} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../navbar/sidebar";   
import LoginScreen from "../login/login";
import ScheduleScreen from "../schedule/schedule";
import HomeScreen from "../home/home";
import ContactScreen from "../contact/contact";


export default function Navbar () {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();
    
    return <>
    <View style ={styles.body}>

    <View style={styles.bodyNav}>
        <Pressable style={styles.button} onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
        <AntDesign name="menu-fold" size={28} color="#FFF"/>
        <Text style={styles.buttonText}>Menu</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>navigation.navigate("Agenda")}>
        <FontAwesome name="calendar-o" size={28} color="#FFF"/>
        <Text style={styles.buttonText}>Agenda</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>navigation.navigate("Login")}>
        <FontAwesome name="user-circle-o" size={28} color="#FFF"/>
        </Pressable>
    </View>
    
    </View>

    <Drawer.Navigator drawerContent={CustomDrawer} backBehavior="history" initialRouteName="Login" screenOptions={{
    headerShown: false,
    swipeEnabled: true, // Oculta o cabeçalho
    // drawerActiveTintColor: 'red', // Cor do texto/ícone quando o item está ativo
    // drawerInactiveTintColor: 'red', // Cor do texto/ícone quando o item está inativo
    // drawerActiveBackgroundColor: 'red', // Cor de fundo do item ativo
    // drawerInactiveBackgroundColor: 'red', // Cor de fundo do item inativo
}}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Agenda" component={ScheduleScreen}/>
        <Drawer.Screen name="Contact" component={ContactScreen}/>
    </Drawer.Navigator>
    </>
}

const styles = StyleSheet.create ({
    
    body: {
        flexDirection: "column",
        position: "static",
        zIndex: 99, 
    },
    
    bodyNav: {
        display: "flex",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: "#4E8098",
        justifyContent: "space-between",
        
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
        color: "#FCF7F8",
        lineHeight: 28,
        paddingLeft: 8,
        fontFamily: "RalewaySemiBold",
        fontSize: 18,
    },

    button: {
        flexDirection: "row",
    },
})