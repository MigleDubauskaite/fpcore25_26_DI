class VideoPlayer {
  constructor(tituloVideo = "Mi Video") {
    this.tituloVideo = tituloVideo;
    this.videos = [];
    this.render();
  }

  agregarVideo({ src }) {
    this.videos.push({ src });
    this.render();
  }

  render() {
    let contenedor = document.querySelector("#videoPlayer");
    if (contenedor) contenedor.remove();

    contenedor = document.createElement("div");
    contenedor.id = "videoPlayer";

    const botonReproducir = document.createElement("button");
    botonReproducir.classList.add("play");
    botonReproducir.innerText = "Play";

    const botonPausar = document.createElement("button");
    botonPausar.classList.add("pause");
    botonPausar.innerText = "Pause";

    const titulo = document.createElement("h3");
    titulo.innerText = this.tituloVideo;

    contenedor.append(titulo);

    this.videos.forEach(({ src }) => {
      const video = document.createElement("video");
      video.style.width = "320px";

      const source = document.createElement("source");
      source.src = src;
      video.append(source);

      botonReproducir.addEventListener("click", () => video.play());
      botonPausar.addEventListener("click", () => video.pause());

      video.addEventListener("click", () => video.play());

      const demoTiempo = document.createElement("p");
      demoTiempo.id = "demo";
      demoTiempo.textContent = "Tiempo reproducido: 0:0";

      const demoTiempoRestante = document.createElement("p");
      demoTiempoRestante.id = "demoRestante";
      demoTiempoRestante.textContent = "Tiempo reproducido: 0:0";

      video.addEventListener("timeupdate", () => {
        const currentTime = video.currentTime;
        const restante = video.duration - video.currentTime;
        demoTiempo.textContent = `Tiempo reproducido: ${currentTime}`;
        demoTiempoRestante.textContent = `Tiempo que queda: ${restante}`;
      });

      contenedor.append(video, demoTiempo, demoTiempoRestante);
    });

    contenedor.append(botonReproducir, botonPausar);
    document.body.append(contenedor);
  }
}
const video = new VideoPlayer("Olas del mar");

video.agregarVideo({
  src: "/video/video1.mp4",
});
