import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/iniciosesion.css";

export const InicioSesion = () => {
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        if (!tipoUsuario) {
            Swal.fire({
                title: 'Error!',
                text: 'Seleccione un tipo de usuario (Particular o Empresa)',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const response = await actions.login(email, password, tipoUsuario, navigate);
        console.log("Login response:", response); // Add this line to debug the response

        if (response && response.access_token) {
            // Successful login logic
            localStorage.setItem("token", response.access_token);
            // Navigate to the appropriate page
            navigate("/somepage"); // replace with the correct path
        } else {
            Swal.fire({
                title: 'Hola!',
                text: response ? response : "Bienvenid@ a tu barrio!",
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className="inicio-sesion d-flex justify-content-center">
            <div className="LeftSide col-md-4">
                <h1>¡Nos alegra volver a verte en tu barrio!</h1>
            </div>
            <div className="col-md-4 m-4">
                <div className="card p-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <h1>Iniciar sesión</h1>
                            </div>
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Accede con tu dirección de email y contraseña</label>
                                <div className="d-flex justify-content-around m-2">
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="opcion"
                                            id="opcion1"
                                            value="particular"
                                            checked={tipoUsuario === "particular"}
                                            onChange={(event) => setTipoUsuario(event.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="opcion1">Soy un particular</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="opcion"
                                            id="opcion2"
                                            value="vendedor"
                                            checked={tipoUsuario === "vendedor"}
                                            onChange={(event) => setTipoUsuario(event.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="opcion2">Soy una empresa</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@address.com" onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="***********" onChange={(event) => { setPassword(event.target.value) }} />
                                <div className="form-text">¿Olvidaste tu contraseña?</div>
                            </div>
                            <button type="submit" className="boton mb-4">Iniciar Sesión</button>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                            </div>
                            <br />
                            <div className="form-text d-flex justify-content-center">¿No tienes cuenta?
                                <Link to="/createuser">
                                    Crea una cuenta nueva
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
