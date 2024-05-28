import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/SIMBOLOCOLOR.png";
import "../../styles/nosotros.css";
import "../../img/01woman.jpg"
import "../../img/02woman.jpg"


export const Nosotros = () => {

    return (
        <div className="text-center pt-5 pb-5 fondo-amarillo2 ">

            <h1>Bienvenido</h1><br></br>

            <h3 className="pb-3">¡En tu barrio te espera un mundo de posibilidades!</h3>


            <div className="container text-center fondo-amarillo pt-3 pb-3 ">
                <div className="row row-cols-3 ">
                    <div className="col img-fluid "><img src="01woman.jpg"  ></img></div>
                    <div className="col text-start m-2 ">
                        <ul type="none">
                            <li className="text-danger-emphasis "><strong>¿Cansado de las grandes superficies y de la impersonalidad de las compras online?</strong></li>
                            <li>
                                En tu barrio queremos acercarte a los comercios de tu barrio, esos pequeños negocios llenos de encanto y
                                productos únicos que hacen de nuestra comunidad un lugar especial.</li></ul></div>

                </div>
            </div>
            <br></br>




            <h2>¿Qué te ofrece En tu barrio?</h2>
            <br></br>
            <div className="lista-usuarios container text-start px-4 fondo-amarillo ">
                <ul className="Lista-propuestas row row-cols-2 " type="none" >
                    <div ><li className="text-danger-emphasis m-2"> <strong>Un centro comercial virtual para tu barrio: </strong>
                        Descubre una amplia variedad de productos y servicios a tu alcance,
                        desde tiendas de alimentación hasta librerías,
                        pasando por talleres de artesanía y mucho más. Todo ello, sin moverte de casa y con la comodidad de comprar online.</li>
                        <li className="text-danger-emphasis"><strong>Apoya al comercio local: </strong>Cada compra que realizas En tu barrio contribuye a fortalecer la economía de tu barrio y a crear un futuro más sostenible.</li>
                        <li className="text-danger-emphasis"><strong>Productos frescos y de calidad: </strong>Disfruta de productos frescos y de temporada de la mano de comercios locales que apuestan por la calidad y la atención al cliente.</li>
                        <li className="text-danger-emphasis"><strong>Comodidad y rapidez: </strong>Recibe tus compras a domicilio o recógelas en la tienda, ¡tú eliges! Además, te ofrecemos un sistema de pago seguro y fácil de usar.</li>
                        <li className="text-danger-emphasis"><strong>Precios competitivos: </strong>Compara precios y encuentra las mejores ofertas en productos de tus tiendas favoritas.</li>
                    </div><div><img src="02woman.jpg" className="img-fluid my-5" ></img></div></ul>
            </div>

            <br></br>
            <h2>¿Eres un pequeño comerciante?</h2>
            <br></br>

            <p>Únete a En tu barrio y da a conocer tu negocio a miles de clientes potenciales. <br></br>
                Crea tu perfil online de forma gratuita y empieza a vender tus productos desde hoy mismo.</p>

            <a href="/createuser"><h4>¡Regístrate ahora!</h4></a>

            <h6>Juntos, podemos construir un futuro mejor para nuestros barrios.</h6>
            <a className="navbar-brand" href="/">
                <img src={Logo} alt="Logo" className="logo-nos" />
            </a>
        </div>
    );
};