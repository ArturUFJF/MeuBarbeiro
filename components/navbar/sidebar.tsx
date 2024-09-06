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

export default function SidebarCustom(){
    const navigation = useNavigation();

    return <>
    <View style={styles.body}>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("Agenda")}>
        <Text style={styles.buttonText}>Agenda</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
        </Pressable>
    </View>
    </>
}

const styles = StyleSheet.create ({
    body: {
        backgroundColor: "#FCF7F8",
        height: "100%",
        borderRightWidth: 1,
        borderRightColor: "#FFFFFF",
    },
})