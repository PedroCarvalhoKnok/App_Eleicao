import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export default function CadastroCandidato({ navigation }) {
  const [cargo, setCargo] = useState("");
  const [partido, setPartido] = useState("");
  const [cargos, setCargos] = useState(["Senador", "Governador", "Presidente"]);
  const [partidos, setPartidos] = useState(["PT", "PSDB", "PL", "PSOL"]);
  return (
    <View style={styles.container}>
      <Text style={styles.tipo}>Cadastro de Candidatos</Text>
      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          maxLength={40}
          defaultValue=""
          placeholder="Código"
        ></TextInput>
      </View>
      <View style={styles.escolhaContainer}>
        <TextInput
          style={styles.entrada}
          maxLength={40}
          defaultValue=""
          placeholder="Nome do Candidato"
        ></TextInput>
      </View>
      <View style={styles.brancoView}>
        <View style={styles.brancoBtn}>
          <Picker
            selectedValue={partido}
            style={styles.pickerStyle}
            mode={"dialog"}
            onValueChange={(itemValue, itemindex) => setPartido(itemValue)}
          >
            {partidos.map((partido, index) => (
              <Picker.Item key={index} label={partido} value={partido} />
            ))}
          </Picker>
        </View>

        <View style={styles.corrigeView}>
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

        <View style={styles.corrigeView}>
          <TouchableOpacity
            //onPress={onPressLearnMore}
            style={styles.cadastroBtn}
          >
            Cadastrar
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  tipo: { fontSize: 35 },
  escolhaContainer: { paddingTop: 30 },
  escolha: { alignItems: "center", textAlign: "center", fontSize: 20 },
  entrada: {
    borderBottomColor: "#33ffbb",
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
    width: 300,
  },
  brancoView: { width: 300, height: 200 },
  brancoBtn: { paddingTop: 50 },
  corrigeView: { paddingTop: 30, borderRadius: 10 },

  cadastroBtn: {
    backgroundColor: "#33ffbb",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    height: 50,
  },
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
});
