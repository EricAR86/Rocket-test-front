import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'



const Birth = ({ onChange }) => {


    const [data, setData] = useState({
        day: "",
        month: "",
        year: "",
    });


    const { day, month, year } = data

    useEffect(() => {
        onChange({ day, month, year })
    }, [day, month, year])

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className="form-container">

            <div className='background'>
                <h1>¿Cual es tu fecha de nacimiento?</h1>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Dia" name="day" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Mes" name="month" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Año" name="year" onChange={handleInputChange} />
                </Form.Group>
            </div>
            <div className='color-form'>
                <h5>{day} {month} {year}</h5>
            </div>
        </div>

    )
}

export default Birth