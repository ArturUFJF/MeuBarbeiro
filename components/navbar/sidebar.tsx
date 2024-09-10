import React from "react";
import { useAuth } from "../../app/context/AuthContext";
import {Image, Text, View, StyleSheet, Pressable} from "react-native";
import { useNavigation, NavigationProp} from "@react-navigation/native";   
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CustomDrawer(props:any) {

    const navigation = useNavigation<NavigationProp<any>>();
    const { logout } = useAuth(); // Obtendo a função de logout

  return <>
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../assets/images/LogoPreta.png')} // Logo
          style={styles.logo}
        />
      </View>

      
      <View style={styles.itemBody}>
        <DrawerItem
            focused={props.state.routeNames[props.state.index] === 'Home'}
            style={styles.item}
            label="Início"
            onPress={() => navigation.navigate('Home')}
            icon={({ color, size }) => <FontAwesome name="home" size={28} color={'black'} />}
            labelStyle={styles.label}

        />

        <DrawerItem
            focused={props.state.routeNames[props.state.index] === 'Agenda'}
            style={styles.item}
            label="Agenda"
            onPress={() => navigation.navigate('Agenda')}
            icon={({ color, size }) => <FontAwesome name="calendar" size={28} color={'black'} />}
            labelStyle={styles.label}
        />

        <DrawerItem
            focused={props.state.routeNames[props.state.index] === 'Contact'}
            style={styles.item}
                  label="Contato"
            onPress={() => navigation.navigate('Contact')}
            icon={({ color, size }) => <FontAwesome name="phone" size={31} color={'black'} />}
            labelStyle={styles.label}
        />      
        
        <DrawerItem
            focused={props.state.routeNames[props.state.index] === 'Login'}
            style={styles.item}
            label="Admin"
            onPress={() => navigation.navigate('Admin')}
            icon={({ color, size }) => <MaterialIcons name="admin-panel-settings" size={26} color={'black'} />}
            labelStyle={styles.label}
        />


      </View>


      <View style={styles.footer}>
        <Pressable style={styles.logoutButton} onPress={logout}>
          <FontAwesome name="sign-out" size={28} color="#000" />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#FCF7F8',
    padding: 20,
    alignItems: 'center',
    borderBottomColor: "#A31621",
    borderBottomWidth: 2,
  },

  logo: {
    width: 200,
    height: 100,
  },

  itemBody: {
    flex: 1,
    marginTop: 20,
  },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  logoutText: {
    marginLeft: 10,
    fontFamily: "RalewayBlack",
    fontSize: 18,
    color: '#000',
  },

  label: {
    fontFamily: "RalewayBlack",
    fontSize: 16,
    color: '#000',
  },

  item: {
    marginHorizontal: 10,
    borderRadius: 4,
    padding: 10,
    borderBottomColor: "#A31621",
    borderBottomWidth: 2,
  },
});
