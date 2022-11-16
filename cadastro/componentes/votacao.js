import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { InserirVoto } from "../service/votacaoService"

export default function Votacao({ navigation }) {
  const [cargo, setCargo] = useState("Governador");
  const [voto, setVoto] = useState("");


  function validarVoto() {
    let resultado = true;

    if(voto === '')
      return false;

    switch (cargo) {
      case "Governador":
        resultado = voto.length != 2 ? false : true;
        break;
      case "Senador":
        resultado = voto.length != 3 ? false : true;
        break;
      case "Presidente":
        resultado = voto.length != 2 ? false : true;
        break;
    }

    return resultado;
  }


  async function votar() {

    if (!validarVoto()) {
      Alert.alert(`Favor informar um candidato com número válido.`);
    }

    await InserirVoto(voto, cargo).then((response) => {
      if (response === 'voto inserido com sucesso' && cargo === "Governador") {
        setCargo("Senador");
        setVoto("");
      }

      if (response === 'voto inserido com sucesso' && cargo === "Senador") {
        setCargo("Presidente");
        setVoto("");
      }

      if (response === 'voto inserido com sucesso' && cargo === "Presidente") {
        Alert.alert('FIM');
      }
    });


  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/eleicao.png")}
      />
      <Text value={cargo} style={styles.tipo}></Text>
      <View style={styles.escolhaContainer}>
        <Text
          style={styles.escolha}
        >
          Escolha um candidato
        </Text>
        <TextInput
          style={styles.entrada}
          onChangeText={(texto) => setVoto(texto)}
          maxLength={40}
          value={voto}
          placeholder="Vote!"
        ></TextInput>
      </View>

      <View style={styles.brancoView}>
        <View style={styles.brancoBtn}>
          <View style={styles.corrigeView}>
            <TouchableOpacity
              onPress={() => { setVoto("") }}
              style={styles.cadastroBtn}
            >
              Corrige
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.corrigeView}>
          <View style={styles.corrigeView}>
            <TouchableOpacity
              onPress={() => { votar(); }}
              style={styles.cadastroBtn}
            >
              Confirma
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.corrigeView}>
          <View style={styles.corrigeView}>
            <TouchableOpacity
              onPress={() => { setVoto("00"); votar(); }}
              style={styles.cadastroBtn}
            >
              Branco
            </TouchableOpacity>

          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { height: 200, width: 200, marginBottom: 50, borderRadius: 10 },
  tipo: { fontSize: 35 },
  escolhaContainer: { paddingTop: 50 },
  escolha: { alignItems: "center", textAlign: "center", fontSize: 20 },
  entrada: {
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
  brancoView: { width: 300, height: 200 },
  brancoBtn: { paddingTop: 40 },
  corrigeView: { paddingTop: 15 },
  cadastroBtn: {
    backgroundColor: "#33ffbb",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    height: 50,
  },

});
