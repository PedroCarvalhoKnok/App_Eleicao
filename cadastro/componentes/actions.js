import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function Actions({ navigation }) {
  useEffect(() => {
    console.log(`perfil é ${sessionStorage.getItem("perfil")}`);
  }, []);

  return (
    <View style={styles.container}>
      {sessionStorage.getItem("perfil") === "admin" ? (
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("CadastroPartido")}
        >
          <Text>Partidos</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {sessionStorage.getItem("perfil") === "admin" ? (
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("CadastroCandidato")}
        >
          <Text>Candidatos</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      {sessionStorage.getItem("perfil") === "eleitor" ? (
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Votacao")}
        >
          <Text>Votar</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Resultado")}
      >
        <Text>Resultados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  botao: {
    backgroundColor: "#33ffbb",
    marginTop: 50,
    borderRadius: 10,
    width: "25%",
    height: 50,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
