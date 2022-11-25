import { CardUser } from "../../components";

function Contact() {
 
    return (
        <div className="container my-5">
            <div className="row">

                <CardUser/> 

                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <h2 class=" text-warning text-center fw-bold ff-gotham display-4 mb-5">
                        Te <small class="text-muted"> Escuchamos</small>
                    </h2>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col align-self-center border border-warning p-5 rounded-2 shadow mx-2 bg-light">
                                <h3>Conoce a Codigo</h3>
                                Nuestro asistente virtual, el cual estará disponible las 24
                                horas del día, para poder ayudarte.
                            </div>
                            <div class="col align-self-center border border-warning p-5 rounded-2 shadow mx-2 bg-light">
                                <h4>Correo: consultas@repartidev.com</h4>
                                Escríbenos, estamos atentos a tus dudas o consultas para poder
                                resolverlas.
                            </div>
                        </div>
                    </div>
                    <div class="container text-center mt-5">
                        <div class="row">
                            <div class="col align-self-center border border-warning p-4 rounded-2 shadow mx-2 bg-light">
                                <h3>Call Center: 01-6111-6060</h3>
                                Lunes a Domingo de 10:00 a.m. a 7:00 p.m.
                            </div>
                            <div class="col align-self-center border border-success p-4 rounded-2 shadow mx-2 bg-light">
                                <h3>WhatsApp: 970 311 911</h3>
                                Conversemos, estamos en línea para ayudarte.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
