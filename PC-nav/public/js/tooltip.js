class Tooltip{
    constructor({fondo='black', texto='white'}){
        this.fondo = fondo;
        this.texto = texto;
        this.render();
    }

    render(){
        /* ponernos encima de  icono floppy disk y que nos salga mensaje guardar cambios */
        const etiqueta = document.createElement('div');
        const iconos = document.getElementsByClassName('icono');
        
        for(const icono of iconos){
            icono.addEventListener('mouseover', function(){
                etiqueta.innerText = icono.dataset.titulo;
            })
        }

    }
}
