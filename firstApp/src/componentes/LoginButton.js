import { Button, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginButton() {
  return (
    <View style={styles.footer}>
      <Button
        style={styles.Button}
        onPress={pressButton}
        title="Entrar!"
        color="black"
      />
    </View>
  );
}
