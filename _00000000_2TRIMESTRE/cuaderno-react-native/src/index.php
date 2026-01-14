<?php
require_once "inc/datos.php";
include_once "inc/header.php";

?>

<main>
<?php
$contenido = $_GET['contenido'] ?? null;

if(!$contenido){

include "inc/tema-1.php";

}else{
  
  /* echo str_replace("-", " ", $contenido); */
  echo '<h2>' . $tematicas[ucfirst(str_replace("-", " ", $contenido))]['titulo'] . '</h2>';
  echo '<p>' . $tematicas[ucfirst(str_replace("-", " ", $contenido))]['descripcion'] . '</p>';
  include "inc/" . $contenido . ".php";
  
}
?>
</main>
<?php include 'inc/footer.php' ?>