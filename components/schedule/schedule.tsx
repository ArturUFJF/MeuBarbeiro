import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function Schedule() {
  const appointments = [
    {
      time: "09:00 AM",
      barbershop: "Barbearia Mineira",
      service: "Corte",
    },
    {
      time: "10:30 AM",
      barbershop: "Barbearia Interessante",
      service: "Barba",
    }
  ];

  return (
    <>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Minha Agenda</Text>
      </View>

      <ScrollView style={styles.body}>
        {appointments.map((appointment, index) => (
          <View key={index} style={styles.appointment}>
            <Text style={styles.time}>{appointment.time}</Text>
            <Text style={styles.client}>{appointment.barbershop}</Text>
            <Text style={styles.service}>{appointment.service}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 8,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  titleBody: {
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  title: {
    paddingTop: 20,
    borderBottomWidth: 4,
    fontFamily: "SquadaOne",
    fontSize: 32,
    alignSelf: "center",
  },
  appointment: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
  },
  client: {
    fontSize: 16,
    marginTop: 4,
  },
  service: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});