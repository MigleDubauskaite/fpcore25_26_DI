# **Enunciado:** 



###### **Tarea 1. Creación de un componente visual de reproducción de vídeo con Pug, Express y JavaScript.**



Creamos una clase llamada VideoPlayer que permite generar dinámicamente los videos en el documento HTML.

La clase debe tener un array interno de videos donde se guardarán los objetos de cada video agregado.



Debe incluir un método agregarVideo({src}) que añada un nuevo video al array de videos.





###### **Documentación del funcionamiento de la clase y su implementación:**



Para crear la instancia del reproductor de video, sigue estos pasos:



* Crea carpeta donde quieres subir el proyecto.
* Lo debes iniciar con el comando npm init -y.
* Escribe el comando "npm install express pug" para instalar las dependencias.
* Crea archivo app.js en la raíz del proyecto.
* Crea carpetas views y public.
* Sube el archivo video.js a la carpeta public/js.
* Enlaza el archivo index.pug con video.js utilizando la etiqueta script( *script(src="/js/video.js")* ).
* Crea una instancia de la clase VideoPlayer dentro de tu archivo video.js.



**Por ejemplo:**

const video = new VideoPlayer("Olas del mar");

video.agregarVideo({

&nbsp; src: "/video/video1.mp4",

});



