<?php

//Todo lo que esta dentro de lo lee el navegador
//echo sirve para imprimir
$nombre = 'Migle';

// es recomendable poner null cada vez que una variable entra por post o get
$numero = $_GET['numero'] ?? null;

echo '<p style="color:red">Hola desde echo ' . $nombre . '</p>';
echo '<p>Tengo' . $numero . '</p>';

//include permite incluir funciones u otros archivos
//tambien se puede utilizar require
//pero include si tiene un error sigue funcionando pero require no
//include_once si queremos incluir un archivo que solo se pueda incluir una vez
include "inc/header.php";
?>
<main>
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
</main>
<?php include 'inc/footer.php' ?>