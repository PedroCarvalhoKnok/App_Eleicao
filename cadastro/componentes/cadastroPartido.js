import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";

export default function CadastroPartido({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>Cadastro de Partidos</Text>
      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          maxLength={40}
          defaultValue=""
          placeholder="Sigla"
        ></TextInput>
      </View>

      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          maxLength={40}
          defaultValue=""
          placeholder="Descrição"
        ></TextInput>
      </View>
      <View style={styles.brancoBtn}>
      <TouchableOpacity
            //onPress={onPressLearnMore}
            style={styles.cadastroBtn}
          >
            Cadastrar
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
