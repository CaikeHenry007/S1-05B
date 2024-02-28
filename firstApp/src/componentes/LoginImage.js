import { Image, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginImage() {
  return (
    <View>
    <Image
      source={require("../assets/images/imagem_menor.png")}
      style={styles.image2}
      resizeMode="center"
    />
    </View>
  );
}
