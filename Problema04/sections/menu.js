class Menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="images/logo/northwind_T.png" alt="" width="65%"  class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index2.html">Diálogos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index3.html">Carrusel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index4.html#">Seleccionar Imágenes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index5.html">Validar Formularios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index6.html">Uso de Cookies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index7.html">Objetos de Formulario</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index8.html">Crucigrama</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
    }
}

customElements.define('menu-component', Menu);
