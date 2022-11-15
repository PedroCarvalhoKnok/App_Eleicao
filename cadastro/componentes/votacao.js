import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";

export default function Votacao({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/eleicao.png")}
      />
      <Text style={styles.tipo}>Governador</Text>
      <View style={styles.escolhaContainer}>
        <Text
          style={styles.escolha}
        >
          Escolha um candidato
        </Text>
        <TextInput
          style={styles.entrada}
          maxLength={40}
          defaultValue=""
          placeholder="Vote!"
        ></TextInput>
      </View>

      <View style={styles.brancoView}>
        <View style={styles.brancoBtn}>
        <View style={styles.corrigeView}>
        <TouchableOpacity
            //onPress={onPressLearnMore}
            style={styles.cadastroBtn}
          >
            Corrige
          </TouchableOpacity>

        </View>
        </View>

        <View style={styles.corrigeView}>
        <View style={styles.corrigeView}>
        <TouchableOpacity
            //onPress={onPressLearnMore}
            style={styles.cadastroBtn}
          >
            Confirma
          </TouchableOpacity>

        </View>
        </View>

        <View style={styles.corrigeView}>
        <View style={styles.corrigeView}>
        <TouchableOpacity
            //onPress={onPressLearnMore}
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
