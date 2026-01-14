import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* Mitad superior (azul) */}
        <View style={[styles.hemi, { backgroundColor: "cyan" }]}>
          <View style={styles.cajaUser}>
            <Image
              source={require("./assets/mama-fratelli.png")}
              style={styles.imagenUser}
            />
            <View style={styles.botonEditar}>
              <Image
                source={require("./assets/setting.png")}
                style={styles.editar}
              />
            </View>
            <Text style={styles.nombre}>Mamá Fratelli</Text>
          </View>
        </View>

        {/* Mitad inferior (blanca) */}
        <View style={[styles.hemi, { backgroundColor: "white" }]}>
          <View style={styles.icon}>
            <Image
              source={require("./assets/details.png")}
              style={styles.editar}
            />
            <Text>Mostrar detalles</Text>
            <Image
              source={require("./assets/arrow.png")}
              style={styles.arrow}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // de arriba a abajo
  },

  hemi: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cajaUser: {
    width: 220,
    height: 150,
    alignItems: "center",
  },

  imagenUser: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "relative",
  },

  nombre: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },

  botonEditar: {
    width: 42,
    height: 42,
    borderRadius: 75,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  editar: {
    width: 20,
    height: 23,
    marginRight: 8,
  },

  arrow: {
    width: 20,
    height: 23,
    marginLeft: 20,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 15,
    height: 15,
  },
});
