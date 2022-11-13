import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
      <View style={styles.container}>
          
      <Image
        style={{ height: 200, width: 200, marginBottom: 50, borderRadius: 10 }}
        source={ require('../assets/votar.png') }
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { SelecionaPerfil('admin'); navigation.navigate("Home"); }}
      >
        <Text>Admin</Text>
        {/* <MaterialIcons name="local-parking" size={32} color="white" /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { SelecionaPerfil('eleitor'); navigation.navigate("Home"); }}
      >
        <Text>Eleitor</Text>
        {/* <MaterialIcons name="local-pizza" size={32} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
}

function SelecionaPerfil(perfil) {

  sessionStorage.setItem('perfil', perfil);
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    backgroundColor: "#33ffbb",
    marginTop: 10,
    borderRadius: 10,
    width: "25%",
    height: 50,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
});
