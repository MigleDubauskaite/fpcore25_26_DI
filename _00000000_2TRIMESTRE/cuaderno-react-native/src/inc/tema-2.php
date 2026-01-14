<h2>tema 2</h2>

<?php
$numeros = [10, 'veinte', 40, 50];
echo '<p>' . count($numeros) . '</p>';
echo  '<p>' . $numeros[1] . '</p>';
array_push($numeros, 60);
echo '<p>' . count($numeros) . '</p>';
echo  '<p>' . $numeros[4] . '</p>';
sort($numeros);

echo '<ul>';
foreach ($numeros as $numero) {
    echo  '<li>' . $numero . '</li>';
}
echo '</ul>';

$indice = array_search("veinte", $numeros);
echo  '<p>' . $indice. '</p>';

$precios = [
    "Pan" => 1.20,
    "Leche" => 0.95,
    "Café" => 2.50
];

echo $precios['Leche'];


$productos = [
    ["nombre" => "Teclado", "precio" => 20],
    ["nombre" => "Ratón", "precio" => 10],
    ["nombre" => "Pantalla", "precio" => 150]
];

echo $productos[2]['nombre'] . ':' . $productos[2]['precio'];

?>