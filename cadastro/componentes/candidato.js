import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function Candidato({ candidato }) {
  return (
    <View style={styles.usuario}>
      <View style={{ backgroundColor: "#33ffbb" , width: 300, }}>
        <View>
          <Text style={styles.listaNome}
            >Nome: {candidato.nome}</Text>
          <Text style={styles.listaNome}
           >Partido: {candidato.partido}</Text>
      </View>

      <View style={{ flexDirection: "column" }}>
          <Text style={styles.listaNome}
             value={nome}
          >Categoria {candidato.descricao}</Text>
      </View>
      <View style={styles.dadosBotoesAcao}>
        <TouchableOpacity>
          <Text style={styles.listaNome}>{candidato.percentual}%</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 10,
  },
  usuario: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:20,
  },
});
