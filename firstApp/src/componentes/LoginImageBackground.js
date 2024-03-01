import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";

const LoginImageBackground = ({ children }) => {
  
  return (
      <ImageBackground
        source={require("../assets/images/imagem_fundo.png")}
        style={styles.image}
      >
       { children }
      </ImageBackground>
  );
}

export default LoginImageBackground;