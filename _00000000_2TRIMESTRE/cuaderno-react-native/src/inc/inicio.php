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