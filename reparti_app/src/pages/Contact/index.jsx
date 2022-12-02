import { CardUser } from "../../components";

function Contact() {
 
    return (
        <div className="container my-5">
            <div className="row">
                <CardUser />
                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 p-5 rounded-3 bg-dark">
                    <h2 class=" text-white text-center fw-bold ff-gotham display-4 mb-5">
                        Te <span class="text-warning"> Escuchamos</span>
                    </h2>

                    <div class="d-grid gap-3">
                        <div class="p-4 bg-light border rounded-4">
                            <h3>👉🏼 Te presentamos a Pear🍐</h3>
                            ✅Nuestro asistente virtual, el cual estará disponible las 24 horas
                            del día, para poder ayudarte.
                        </div>
                        <div class="p-4 bg-light border rounded-4">
                            <h4>📩 Correo: consultas@repartidev.com</h4>
                            ✅Escríbenos, estamos atentos a tus dudas o consultas para poder
                            resolverlas.
                        </div>
                        <div class="p-4 bg-light border rounded-4">
                            <h3>📠 Call Center: 01-6111-6060</h3>
                            ✅Lunes a Domingo de 10:00 a.m. a 7:00 p.m.
                        </div>
                        <div class="p-4 bg-light border rounded-4">
                            <h3>📱 WhatsApp: 970 311 911</h3>
                            ✅Conversemos, estamos en línea para ayudarte.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
