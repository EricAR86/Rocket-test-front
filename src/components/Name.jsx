import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'



const Name = ({ onChange }) => {
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [lastName, setLastName] = useState("")
    const [secondLastName, setSecondLastName] = useState("")


    useEffect(() => {
        onChange({ name, secondName, lastName, secondLastName })
    }, [name, secondName, lastName, secondLastName])


    return (
        <div className="form-container">

            <div className='background'>
                <h1>¿Cual es tu nombre?</h1>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Segundo nombre" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Apellido paterno" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Apellido materno" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} />
                </Form.Group>
            </div>

            <div className='color-form'>
                <h5>{name} {secondName} {lastName} {secondLastName}</h5>
            </div>

        </div>
    )
}

export default Name