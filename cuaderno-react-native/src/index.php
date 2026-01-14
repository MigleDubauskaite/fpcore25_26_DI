
<?php
require_once "inc/datos.php";
include_once "inc/header.php";
//include -> Incluye un archivo, pero si falla NO detiene el script.
//require -> Incluye un archivo, pero si falla SÍ detiene el script.

//include_once y require_once para evitar que un archivo se cargue más de una vez
//Tenemos que poner antes datos para poder utilizarlo dentro del header 

$contenido = $_GET['contenido'] ?? null;
?>

<main>
    <?php 
    if(!$contenido){
        include 'inc/inicioincl.php';
        include "inc/tema-1.php";
    } else {
        $clave = ucfirst(str_replace("-", " ", $contenido));
        echo '<h2>' . $tematicas[$clave]['titulo'] . '</h2>';
        echo '<p>' . $tematicas[$clave]['descripcion'] . '</p>';
        include 'inc/' . $contenido . '.php';
    }
    ?>
</main>

<?php include 'inc/footer.php'; ?>
