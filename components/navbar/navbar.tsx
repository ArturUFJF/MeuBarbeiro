import React from "react";
import {Text, View, StyleSheet, Pressable, Animated} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { DrawerActions, useNavigation, NavigationProp} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../navbar/sidebar";   
import AdminScreen from "../admin/admin";
import ScheduleScreen from "../schedule/schedule";
import HomeScreen from "../home/home";
import ContactScreen from "../contact/contact";
import IndividualBarberShopScreen from "../individualbarbershop/individualbarbershop";
import ModalPostBarbershop from "../admin/modalPostBarbershop";
import ModalPostProduct from "../admin/modalPostProduct";
import ModalPut from "../admin/modalPut";

export default function Navbar () {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation<NavigationProp<any>>();
    
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
    </View>
    
    </View>

    <Drawer.Navigator drawerContent={CustomDrawer} backBehavior="history" initialRouteName="Home" screenOptions={{
    headerShown: false,
    swipeEnabled: true, 
}}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Admin" component={AdminScreen}/>
        <Drawer.Screen name="Agenda" component={ScheduleScreen}/>
        <Drawer.Screen name="Contact" component={ContactScreen}/>
        <Drawer.Screen name="ModalPut" component={ModalPut}/>
        <Drawer.Screen name="IndividualBarberShop" component={IndividualBarberShopScreen}/>
        
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
	    width: 0,
	    height: 4,
        },
        shadowOpacity: 0.7,
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
        textShadowColor: '#000000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 4,
    },
})