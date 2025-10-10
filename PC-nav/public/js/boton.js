class Boton {

  constructor(bgColor, color, texto) {
    this.bgColor = bgColor || "violet";
    this.color = color || 'white';
    this.texto = texto || 'Botón por defecto';
    this.crearEstilos();
    this.render();
  }

  crearEstilos(){
    const estilos = document.createElement('style');
    estilos.innerText = `.mio{border:0; border-radius:20px;}`;
    document.head.append(estilos);
  }

  render(){
    const btn = document.createElement('button');
    btn.innerText = this.texto;
    btn.style.backgroundColor = this.bgColor;
    btn.style.color = this.color;
    btn.classList.add('mio');
    document.body.append(btn);
  }

}

const boton1 = new Boton('green', 'yellow', 'Dale ahí');
const boton2 = new Boton();

