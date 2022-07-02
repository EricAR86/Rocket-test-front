import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'



const Contacts = ({ onChange }) => {

    const [data, setData] = useState({
        email: "",
        phone: "",
    });


    const { email, phone } = data

    useEffect(() => {
        onChange({ email, phone })
    }, [email, phone])

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className="form-container">

            <div className='background'>
                <h1>Datos de Contacto</h1>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Correo electrónico" name="email" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Teléfono celular" name="phone" onChange={handleInputChange} />
                </Form.Group>
            </div>

            <div className='color-form'>
                <h5>{email}</h5>
                <h5>{phone}</h5>
            </div>

        </div>
    )
}

export default Contacts