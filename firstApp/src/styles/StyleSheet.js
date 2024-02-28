import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Cabeçalho
  header: {
    backgroundColor: "black",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  textHeader: {
    fontSize: 50,
    color: "white",
  },

  // Corpo
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  textBody: {
    fontSize: 20,
    color: "white",
  },

  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  image2: {
    width: "20%",
    height: "10%",
  },

  inputName: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    fontSize: 20,
    backgroundColor: "white",
    width: "50%",
  },

  Button: {
    backgroundColor: "black",
    width: "50%",
  },

  // Rodapé
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  textFooter: {
    fontSize: 20,
    color: "white",
  },
});
