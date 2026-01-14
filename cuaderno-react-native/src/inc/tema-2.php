<br><br><br><br>
<h3>Esta es la TEMA 2</h3>
<br>

<?php
    $numeros = [10, 20, 40, "veinte"];
    echo 'Total de números: ' . count($numeros);
    echo '<h2>' . $numeros . '</h2>';
    array_push($numeros, 100);
    echo 'Total de números: ' . count($numeros);

    sort ($numeros);
    echo '<br><br><h2>Todos los números</h2><ul>';
    foreach ($numeros as $numero){
        echo '<li>' . $numero . '</li>';
    }
    echo '</ul>';

    $indice = array_search("veinte", $numeros);
    echo '<p>EL número requerido:' . $indice . '</p>';

    $precios = [
        "Pan" => 1.20,
        "Leche" => 0.95,
        "Café" => 2.50
    ];

    echo '<br><br>Precio de leche es ' . $precios['Leche'] . '<br><br>';

    $productos = [
        ["nombre" => "Teclado", "precio" => 20],
        ["nombre" => "Ratón", "precio" => 10],
        ["nombre" => "Pantalla", "precio" => 150]
    ];

     echo '<br>Producto de indice 2: <br> ' . $productos[2]['nombre'] . ':' . $productos[2]['precio'] . '<br><br>';

?>

<br>