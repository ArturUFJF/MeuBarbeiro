import React from "react";
import {Image, Text, View, StyleSheet, Pressable, Animated} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";


export default function Navbar () {
    const navigation = useNavigation();
    // const Drawer = createDrawerNavigator();

    return <>
   
    <View style ={styles.body}>

    <View style={styles.bodyNav}>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <AntDesign name="menu-fold" size={28} color="#FFF"/>
        <Text style={styles.buttonText}>Menu</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>navigation.navigate("Schedule")}>
        <FontAwesome name="calendar-o" size={28} color="#FFF"/>
        <Text style={styles.buttonText}>Agenda</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>navigation.navigate("Login")}>
        <FontAwesome name="user-circle-o" size={28} color="#FFF"/>
        </Pressable>
    </View>

    <View style={styles.logoView}>
        <Image 
        style={styles.logo}        
        source={require("../../assets/images/LogoPreta.png")}
        />
    </View>
    
    </View>
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

    logoView:{
        position: "relative",
        display: "flex",
        width: '100%',  
        alignItems: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#A31621",
    },

    logo: {
        width: 200,
        height: 100,
        marginTop: 8,
        marginBottom: 12, 
    }
})