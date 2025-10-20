Enunciado:

Tarea 1. Creación de un componente visual de reproducción de vídeo con Pug, Express y JavaScript.
Documentación del funcionamiento de la clase y su implementación:

Esta clase se llama VideoPlayer y sirve para crear un reproductor de video con JavaScript, sin usar librerías externas. Muestra un título, un video, dos botones (Play y Pause) y el tiempo reproducido junto con el tiempo restante.

Para poder utilizarla, es necesario tener un proyecto de Express y Pug iniciado. Puedes hacerlo de la siguiente manera:

Crea una carpeta donde quieras crear el proyecto.
Inicia el proyecto con el comando npm init -y.
Escribe el comando npm install express pug para instalar las dependencias necesarias.
Crea un archivo app.js en la raíz del proyecto.
Crea las carpetas views y public.
Sube el archivo video.js dentro de la carpeta public/js.

Para utilizar la instancia del objeto, solo necesitas tener un archivo Pug y un archivo JavaScript.
En el archivo Pug no hace falta crear ningún div para el reproductor, ya que la clase lo genera automáticamente.
Solo tienes que enlazar el script al final del body, de esta forma:

script(src="/js/video.js")

En tu archivo video.js se encuentra la clase. Para crear un reproductor, debes crear una instancia de VideoPlayer y luego añadirle un video con el método agregarVideo. Por ejemplo:

const video = new VideoPlayer("Olas del mar");
video.agregarVideo({ src: "/video/video1.mp4" });

Cuando abras la página en el navegador, verás el título del video, el reproductor, los botones de Play y Pause, y los textos que muestran el tiempo reproducido y el tiempo restante.

Si quieres cambiar los colores o el aspecto de los botones, puedes hacerlo desde tu archivo CSS (misEstilos.css).