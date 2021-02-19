import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';

import axios from "axios";

import "./styles.css";

function UpdateClient() {

  const initialClient = {
    title: "",
    email: "",
    nombre: "",
    cedula: ""
  }

  const { id } = useParams();
  const history = useHistory();

  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const PostData = async () => {

    console.log(cedula, email, nombre, telefono);

    await fetch(`http://localhost:5000/api/clients/update/${id}`, {
      method: "put",
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
          alert("Cliente actualizado");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClientById = async (id) => {
    await axios.get(`http://localhost:5000/api/clients/detail/${id}`)
      .then((res) => {
        const client = res.data.body;
        setCedula(client.cedula);
        setEmail(client.email);
        setNombre(client.nombre);
        setTelefono(client.telefono);
      });

  }

  useEffect(() => {
    getClientById(id);
  }, [])

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
                ACTUALIZAR CLIENTE
            </h2>
              <input
                type="text"
                className="input-create-name"
                placeholder="Nombre"
                name="nombre"
                defaultValue={nombre}
                autoComplete="off"
                onChange={nameHandler}
              />
              <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                <input
                  type="email"
                  className="input-create-name"
                  placeholder="Email"
                  name="email"
                  defaultValue={email}
                  autoComplete="off"
                  onChange={emailHandler}
                />
                <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                  <input
                    type="text"
                    className="input-create-name"
                    placeholder="Cédula"
                    name="cedula"
                    defaultValue={cedula}
                    autoComplete="off"
                    onChange={cedulaHandler}
                  />
                  <div className="container-input-create-name row shadow-lg mt-3 ml-1">
                    <input
                      type="tel"
                      className="input-create-name"
                      placeholder="Teléfono"
                      name="telefono"
                      defaultValue={telefono}
                      autoComplete="off"
                      onChange={telefonoHandler}
                    />
                  </div>
                  <Button
                    variant="contained"
                    className="btn-color-green"
                    onClick={() => PostData()}
                  >
                    Actualizar
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

export default UpdateClient;
