// @flow
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'
import { isMethodDeclaration } from 'typescript';
function Employee() {
    const [data, setData] = useState([]);
    const api = "https://64f62b512b07270f705e3d40.mockapi.io/Prit-v-007/Employee";
    useEffect(() => {
        fetch(api).then((res) => { return res.json() }).then((res) => { setData(res) });
    }, [])

    const formattedData = data.map((d) => {
        return (
            <Col className='col-3' key={d.id}>
                <div className="card">
                    <img src={d.fbAvatar} className="card-img-top" alt="image 1" />
                    <div className="card-body">
                        <h5 className="card-title">{d.firstName} {d.lastName}</h5>
                        <p className="card-text">{d.mobileNumber}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{d.age}</li>
                        <li className="list-group-item">{d.expireince}</li>
                        <li className="list-group-item">{d.id}</li>
                    </ul>
                    <div className="card-body">
                        <Link to={"/details/" + d.id} className="mx-2  card-link">Details</Link>
                        <Button color="danger" className="mx-2 btn-outline-danger" onClick={() => {
                            fetch(api + "/" + d.id, { method: "Delte" }).then((res) => {
                                setData(data.filter((temp) => {
                                    return temp.id !== d.id;
                                }))
                            })
                        }}>Delete</Button>
                    </div>
                </div>
            </Col>
        );
    }
    )
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader className="mb-5">
                            <h5 className="card-category">Employee List</h5>
                            <CardTitle tag="h3">
                                Fetched USing Api
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="container">
                                <Row>
                                    {formattedData}
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Employee