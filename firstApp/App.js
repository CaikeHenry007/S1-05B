// Importando os elementos utilizados
import { View } from "react-native";

// Importando os componentes 
import Header from "./src/componentes/Header";
import Login from "./src/pages/Login";
import Footer from "./src/componentes/Footer";

// Importando o arquivo do StyleSheet
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <Header />

      {/* Corpo */}
      <Login />

      {/* Rodapé */}
      <Footer />
    </View>
  );
}
