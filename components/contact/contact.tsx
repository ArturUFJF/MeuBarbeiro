import React from "react";
import { Text, View, ScrollView, Image, StyleSheet, Pressable, Linking } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinkingFunction from "./linking";

export default function Contact(){
    return <>


    <View style={styles.header}>
        <Image
          source={require('../../assets/images/LogoPreta.png')} // Logo
          style={styles.logo}
          />
      </View>

    <ScrollView>

      <View style={styles.section}>
        <Text style={styles.baloon}>Quer ter sua barbearia no nosso aplicativo? Entra em contato!</Text>
      </View>

      <Text style={styles.title}>Redes Sociais</Text>
      <View style={styles.section}>
        
        <Pressable onPress={() => LinkingFunction('instagram')}>
        <FontAwesome6 name="square-instagram" size={48} color="#D7009B"/>
        </Pressable>
        
        <Pressable onPress={() => LinkingFunction('twitter')}>
        <FontAwesome6 name="square-x-twitter" size={48} color="#000000"/>
        </Pressable>
        
        <Pressable onPress={() => LinkingFunction('whatsapp')}>
        <FontAwesome6 name="square-whatsapp" size={48} color="#25D366"/>
        </Pressable>
        
        <Pressable onPress={() => LinkingFunction('gmail')}>
        <FontAwesome6 name="square-google-plus" size={48} color="red"/>
        </Pressable>
        
      </View>

      <Text style={styles.title}>Números de Telefone</Text>
      <View style={styles.sectionNumber}>
        <Pressable onPress={() => LinkingFunction('num1')}>
        <Text style={styles.number}>(32) 99834-0667</Text>
        </Pressable>

        <Pressable onPress={() => LinkingFunction('num2')}>
        <Text style={styles.number}>(32) 99151-9313</Text>
        </Pressable>
      </View>


    </ScrollView>

    
    </>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FCF7F8',
        padding: 12,
        marginBottom: 28,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomColor: "#A31621",
        width: "100%",
        height: "20%",
        borderBottomWidth: 2,
      },

    logo: {
        width: "76%",
        height: "100%",  
      },

      section: {
        width: "90%",
        padding: 8,
        marginTop: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(206,211,220,0.5)',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        flexDirection: "row",
        
      },

      sectionNumber: {
        width: "90%",
        padding: 8,
        marginTop: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(206,211,220,0.5)',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        
      },

      baloon: {
        borderRadius: 12,
        padding: 12,
        fontSize: 26,
        fontFamily: "OswaldMedium",
        textAlign: "center",    
      },

      title: {
        fontFamily: "SquadaOne",
        fontSize: 32,
        marginTop: 48,
        textAlign: "center",
        alignSelf: "center",
      },

      number: {
        fontFamily: "OswaldRegular",
        fontSize: 24,
        color: "#000000",
        textDecorationLine: "underline",
      }
})