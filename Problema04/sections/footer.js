class Footer extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<br><hr>
        <div class="div_pi">
            <strong>Participantes: </strong> <br> Kevin Cordoba <br> Susan Guzman <br> Daniela Carvajal <br> Sebastián Peraza <br/>
            <strong>eMail del Profe:    </strong> <a href="mailto:jruiz@utn.ac.cr?subject=Solicito información">jruiz@utn.ac.cr</a><br />
            <strong>Teléfono del Profe: </strong>85 42 89 18
        </div>
        <div class="div_pc">
            Carrera de Tecnologías de Información<br/>
            Curso de Tecnologías y Sistemas Web I<br/>
            Desarrollado por Team Remontadas
        </div>
        <div class="div_pd">
            <a href="https://www.facebook.com/"><i class="fa fa-2x fa-facebook"></i></a>
            <br>
            <a href="https://twitter.com/"><i class="fa fa-2x fa-twitter"></i></a>
        </div>`
    }
}

customElements.define('footer-component', Footer);
