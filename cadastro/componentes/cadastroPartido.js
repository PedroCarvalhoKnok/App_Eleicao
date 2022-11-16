import { CadastrarPartido } from "../service/partidoService";

import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function CadastroPartido({ navigation }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salva() {
    /* as validações estão sendo feitas do lado do servidor. */
    let partido = {
      descricao: descricao,
      nome: nome,
      numero:numero
      
    };
    console.log(partido);
    await CadastrarPartido(partido)

  }

  function trataErroAPI(error) {
    if (error.response && error.response.data && error.response.data.erro) {
      Alert.alert(error.response.data.erro);
    }
    else {
      Alert.alert(error.toString());
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>Cadastro de Partidos</Text>
      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          onChangeText={(texto) => setNome(texto)}
          maxLength={40}
          defaultValue=""
          placeholder="Sigla"
        ></TextInput>
      </View>

      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          onChangeText={(texto) => setNumero(texto)}
          maxLength={40}
          defaultValue=""
          placeholder="Numero"
        ></TextInput>
      </View>
      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          onChangeText={(texto) => setDescricao(texto)}
          maxLength={40}
          defaultValue=""
          placeholder="Descrição"
        ></TextInput>
      </View>
      <View style={styles.brancoBtn}>
      <TouchableOpacity
          style={styles.cadastroBtn}
          onPress={() => { salva() }}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 5,
  },
  tipo: { fontSize: 35 },
  escolhaContainer: { paddingTop: 30 },
  entrada: {
    borderBottomColor: "#33ffbb",
    borderBottomWidth: 2,
    borderWidth: 0,
    paddingTop: 10,
    fontSize: 30,
    textAlign: "center",
    width: 250,
  },
  brancoBtn: { paddingTop: 80, width: 300, fontSize: 30 },
  cadastroBtn: {
    height: 50,
    backgroundColor: "#33ffbb",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  }
});
