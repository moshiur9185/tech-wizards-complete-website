import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Sidebar from '../../MainDashboard/Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://infinite-island-97956.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const deleteEvent = id =>{
        fetch(`https://infinite-island-97956.herokuapp.com/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
            <div className="d-flex flex-column justify-content-center col-md-9" style={{ position: "absolute", right: 50 }}>
                <h1 className="text-center text-success">Manage Product</h1>
                <Container>
                    <Table className="table table-borderless bg-secondary text-white rounded">
                        <thead>
                            <tr>
                                <th className="text-center">Service Name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(pd => {
                                    const { name, price } = pd;
                                    return <tr>
                                        <td className="text-center">{name}</td>
                                        <td className="text-center">${price}</td>
                                        <td className="text-right">
                                            <button className="btn text-white"><FontAwesomeIcon icon={faPencilAlt} /></button>
                                            <button className="btn text-danger" onClick={() => deleteEvent(pd._id, alert('Product Delete Successfully'))}><FontAwesomeIcon icon={faTrash} /></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        </section>
    );
};

export default ManageService;