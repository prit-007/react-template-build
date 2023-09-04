// @flow
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'
function Employee() {
    const [data, setData] = useState([]);
    const api = "https://64f62b512b07270f705e3d40.mockapi.io/Prit-v-007/Employee";
    useEffect(() => {
        fetch(api).then((res) => { return res.json() }).then((res) => { console.log(res); setData(res) });
    }, [])

    const formattedData = data.map((d) => {
        <Row className='col-4'>
                <div className="card">
                    <img src={d.image1} className="card-img-top" alt="image 1" />
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
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
        </Row>
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
                                <div className='row'>
                                    {console.log(formattedData)}
                                    {formattedData}
                                </div>
                            </div>  
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Employee