import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function Resultado({ navigation }) {
  return (
    <View style={styles.container}>
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
          <Button
            //onPress={onPressLearnMore}
            title="Branco"
            color="#841584"
            accessibilityLabel="Botao para votar em branco"
          />
        </View>

        <View style={styles.corrigeView}>
          <Button
            //onPress={onPressLearnMore}
            title="Corrige"
            color="#841584"
            accessibilityLabel="Botao para corrigir o número votado"
          />
        </View>

        <View style={styles.corrigeView}>
          <Button
            //onPress={onPressLearnMore}
            title="Confirma"
            color="#841584"
            accessibilityLabel="Botao para confirmar a votacao"
          />
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
  brancoBtn: { paddingTop: 80 },
  corrigeView: { paddingTop: 60 },

});
