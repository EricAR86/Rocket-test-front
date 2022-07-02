import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Birth from "./components/Birth";
import Contacts from "./components/Contacts";
import Name from "./components/Name";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios";

function App() {

  const [formInfo, setFormInfo] = React.useState({
    name: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    day: "",
    month: "",
    year: "",
    email: "",
    phone: ""
  })

  const [info, setinfo] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5005/users", formInfo)
      .then(datos => console.log(datos))
      .catch(error => console.log(error))
  }

  function handleChange(info) {
    setFormInfo({
      ...formInfo,
      ...info
    })
  }

  return (

    <div >
      <Form onSubmit={handleSubmit} className="App">
        <Name onChange={handleChange} />
        <Birth onChange={handleChange} />

        <div>
          <Contacts onChange={handleChange} />

          <div className="background">
            <b>Si tus datos son correctos por favor continuemos</b>
          </div>

          <Button variant="info" type="submit" onClick={() => setinfo(true)}>
            Iniciar
          </Button>

          {info && (
            <div className='color-form'>
              <h5>Fecha de nacimiento: {formInfo.day} {formInfo.month} {formInfo.year}</h5>
              <h5>Correo electrónico: {formInfo.email}</h5>
              <h5>Teléfono celular: {formInfo.phone}</h5>
              <h5>Nombre completo: {formInfo.name} {formInfo.secondName} {formInfo.lastName} {formInfo.secondLastName}</h5>
            </div>
          )}
        </div>

      </Form>
      <Routes>
        {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
