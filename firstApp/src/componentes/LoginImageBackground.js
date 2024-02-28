import { ImageBackground, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginImageBackground() {
  return (
    <View style={styles.footer}>
      <ImageBackground
        source={require("../assets/images/imagem_fundo.png")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}
