import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>Entre em contato: contato@gmail.com</Text>
    </View>
  );
}
