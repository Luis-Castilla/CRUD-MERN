import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import axios from "axios";

import "./styles.css";

function CreateClient() {

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const PostData = async () => {
    console.log(cedula, email, nombre, telefono);

    await fetch("http://localhost:5000/api/clients/create", {
      method: "post",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        cedula,
        email,
        nombre,
        telefono
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          // redireccionar
          alert("Cliente creado");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nameHandler = (e) => {
    setNombre(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const cedulaHandler = (e) => {
    setCedula(e.target.value);
  }

  const telefonoHandler = (e) => {
    setTelefono(e.target.value);
  }

  return (
    <>
      <div className="container-input-create row shadow-lg mt-3 ml-1">
        <div className="admin-containedor">
          <div className="row">
            <div className="col ml-5 mt-3">
              <h2 className="text-gris">
                CREAR CLIENTE
            </h2>
              <input
                type="text"
                className="input-create-name"
                placeholder="Nombre"
                name="nombre"
                autoComplete="off"
                onChange={nameHandler}
              />
              <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                <input
                  type="email"
                  className="input-create-name"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  onChange={emailHandler}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                  <input
                    type="text"
                    className="input-create-name"
                    placeholder="Cédula"
                    name="cedula"
                    autoComplete="off"
                    onChange={cedulaHandler}
                  />
                  <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                    <input
                      type="tel"
                      className="input-create-name"
                      placeholder="Teléfono"
                      name="telefono"
                      autoComplete="off"
                      onChange={telefonoHandler}
                    />
                  </div>
                  <Button
                    variant="contained"
                    className="btn-color-green"
                    onClick={() => PostData()}
                  >
                    Guardar
              </Button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default CreateClient;
