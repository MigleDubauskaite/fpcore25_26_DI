<p>
    Esta documentación describe una aplicación desarrollada con React Native. El objetivo de este documento es facilitar
    la
    comprensión general del proyecto, su finalidad y su funcionamiento básico, tanto para otros desarrolladores como
    para
    personas que necesiten entender el uso de la aplicación.
</p>
<p>
    React Native permite desarrollar aplicaciones móviles utilizando JavaScript y componentes reutilizables. La
    aplicación
    documentada se basa en una estructura de componentes que se combinan para construir la interfaz de usuario y
    gestionar
    la lógica de la aplicación.
</p>
<p>
    A continuación se muestra un ejemplo sencillo de un componente principal en React Native, que ilustra la estructura
    básica de una aplicación:
</p>

<h2>Inicio</h2>
<pre>
    <code class="language-javascript">
      
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.caja, { backgroundColor: 'red' }]} />
      <View style={[styles.caja, { backgroundColor: 'orange' }]} />
      <View style={[styles.caja, { backgroundColor: 'green' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',      
    gap: 9,             
    padding: 9,
  },
  caja: {
    width: '48%',         
    height: 100,
    borderRadius: 9,
  },
});

export default Flex;
   </code>
  </pre>