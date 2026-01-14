<?php
declare(strict_types=1);

/*
 * Cargamos los datos de los temas.
 * Este archivo contiene el array $tematicas con toda la información
 * descriptiva de cada tema.
 */
require_once __DIR__ . '/../inc/datos.php';

/**
 * Función: buscarTemaPorSlug
 * -------------------------
 * Recorre el array de temas y devuelve el tema cuyo slug coincide
 * con el solicitado.
 *
 * @param string $slug
 * @param array $tematicas
 * @return array|null
 */
function buscarTemaPorSlug(string $slug, array $tematicas): ?array
{
    foreach ($tematicas as $tema) {
        if ($tema['slug'] === $slug) {
            return $tema;
        }
    }
    return null;
}

/**
 * Función: obtenerContenidoHTML
 * -----------------------------
 * Ejecuta un archivo tema-x.php y captura todo el HTML que genera,
 * devolviéndolo como una cadena de texto.
 *
 * @param string $slug
 * @return string
 */
function obtenerContenidoHTML(string $slug): string
{
    $archivo = __DIR__ . '/../inc/' . $slug . '.php';

    if (!file_exists($archivo)) {
        return '';
    }

    ob_start();
    include $archivo;
    return ob_get_clean();
}

/*
 * Todas las respuestas de este archivo serán JSON.
 * Por eso establecemos la cabecera desde el principio.
 */
header('Content-Type: application/json; charset=utf-8');

/*
 * Leemos el parámetro "contenido".
 * Si no existe, se devolverá el listado de temas.
 */
$contenido = $_GET['contenido'] ?? null;

/* =========================
   ENDPOINT 1: LISTADO
   ========================= */
if (!$contenido) {

    $lista = [];

    foreach ($tematicas as $tema) {
        $lista[] = [
            'slug'        => $tema['slug'],
            'titulo'      => $tema['titulo'],
            'descripcion' => $tema['descripcion']
        ];
    }

    echo json_encode($lista, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

/* =========================
   ENDPOINT 2: TEMA CONCRETO
   ========================= */

$tema = buscarTemaPorSlug($contenido, $tematicas);

if (!$tema) {
    http_response_code(404);
    echo json_encode(
        ['error' => 'Tema no encontrado'],
        JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT
    );
    exit;
}

$respuesta = [
    'slug'        => $tema['slug'],
    'titulo'      => $tema['titulo'],
    'descripcion' => $tema['descripcion'],
    'contenido'   => obtenerContenidoHTML($tema['slug'])
];

echo json_encode($respuesta, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
