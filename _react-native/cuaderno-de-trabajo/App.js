import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.entero}>
      <Text style={{ padding: 30, fontSize: 30, fontStyle: 'bold' }}>Hola</Text>

      <View style={styles.container}>

        <View style={[styles.caja, { backgroundColor: '#FF3F7F' }]} ><Text>Caja 1</Text></View>
        <View style={[styles.caja, { backgroundColor: '#FFC400', color: '#ECF4E8' }]}><Text>Caja 2</Text></View>
        <View style={[styles.caja, { backgroundColor: '#B3BFFF' }]}><Text>Caja 3</Text></View>

         

        {/* <View style={styles.cajita}>
        <Text>M</Text>
        <Text>D</Text>
      </View> */}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  entero: {
    flex: 1,
    backgroundColor: '#8FABD4',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#435663',

  },

  container: {

    flexDirection: 'row',
    gap: 15,
  },

  caja: {
    backgroundColor: '#FFF8D4',
    padding: 30,
    borderRadius: 40,
  },

  /*   cajita: {
      margin: 10,
      gap: 20,
       backgroundColor: '#FFF8D4',
       flexDirection: 'row',
    } */
});
