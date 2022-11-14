import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function Candidato({ candidato }) {
  return (
    <View style={styles.usuario}>
      <View>
        <Text style={styles.listaNome}>Nome</Text>
        <Text style={styles.listaNome}>{candidato.nome}</Text>
        <Text style={styles.listaNome}>Partido</Text>
        <Text style={styles.listaNome}>{candidato.partido}</Text>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={styles.listaNome}>Categoria {candidato.descricao}</Text>
      </View>
      <View style={styles.dadosBotoesAcao}>
        <Text style={styles.listaNome}>Total em %</Text>
        <TouchableOpacity>
          <Text style={styles.listaNome}>{candidato.percentual}</Text>
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
    justifyContent: "center",
  },
  image: { height: 200, width: 200, marginBottom: 50, borderRadius: 10 },
  tipo: { fontSize: 35 },
  escolhaContainer: { paddingTop: 20 },
  escolha: { alignItems: "center", textAlign: "center", fontSize: 20 },
  entrada: {
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
  brancoView: { width: 300, height: 200 },
  brancoBtn: { paddingTop: 80 },
  corrigeView: { paddingTop: 60 },
  pickerStyle: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    textAlign: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#33ffbb",
    borderRadius: 10,
  },
  listaNome: {
    fontSize: 15,
  },
  usuario: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
