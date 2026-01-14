<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
    <link rel="stylesheet" href="static/css/reset.css">
    <link rel="stylesheet" href="static/css/monokai.min.css">
    <link rel="stylesheet" href="static/css/estilos.css">

</head>

<body>

    <header>
        <h2>Apuntes de PHP</h2>
    </header>

    <nav>
        <!-- <ul>
            <?php foreach ($tematicas as $t): ?>
                <li> <?= $t['menu'] ?> . </li>
            <?php endforeach; ?>
        </ul> -->

        <ul>
            <?php foreach ($tematicas as $tema): ?>
                <li>
                    <a href="?contenido=<?= $tema['slug'] ?>">
                        <?= $tema['menu'] ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>

    </nav>

</body>