import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import Candidato from "./candidato";

export default function Resultado({ navigation }) {
  const [cargo, setCargo] = useState("");
  const [cargos, setCargos] = useState(["Senador", "Governador", "Presidente"]);
  const[candidatos, setCandidatos] = useState([{nome: 'Zezinho', partido: 'PT', descricao: 'ze da cove'}, {nome: 'Biruliru', partido: 'PL', descricao: 'nao sou coveiro'}, {nome: 'Alquimista', partido: 'PSDB', descricao: 'teste'}]);
  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>Resultados</Text>
      <View style={styles.escolhaContainer}>
        <Text style={styles.escolha}>Escolha um cargo</Text>
        <Picker
          selectedValue={cargo}
          style={styles.pickerStyle}
          mode={"dialog"}
          onValueChange={(itemValue, itemindex) => setCargo(itemValue)}
        >
          {cargos.map((cargo, index) => (
            <Picker.Item key={index} label={cargo} value={cargo} />
          ))}
        </Picker>
      </View>

      <View style={styles.brancoView}>
        <ScrollView>
          {candidatos.map((candidato, index) => (
            <Candidato
              candidato={candidato}
              key={index.toString()}
            ></Candidato>
          ))}
        </ScrollView>
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
    fontSize: 15
},
});
