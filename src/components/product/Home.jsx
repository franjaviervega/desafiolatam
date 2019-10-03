import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAsyncCreatorGetAll, productAsyncCreatorDelete } from './../../store/modules/product/product.action'
import { Button, Card, CardHeader, CardBody, Table, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

import {FaDog as IcoAdd, FaTrash as IcoDelete,FaRegEdit as IcoEdit } from 'react-icons/fa';
import Logout from './../login/Logout'


const Home = (props) => {
    const dispatch = useDispatch();
    /*const handled = () => {
        dispacth(productAsyncCreatorGetAll())
    }*/

    //ejecuta accion para crear 
    useEffect(() => {
        dispatch(productAsyncCreatorGetAll()); 
    }, []);

    const data = useSelector(datos => datos.product.getAll.data);
    const handleDelete = (e) => {
        dispatch(productAsyncCreatorDelete(e))
        setTimeout(() => {
            props.history.push("/product");
        }, 100);
    }
    return (
        <Container>
        <Card>
            <CardBody>
                {data ?
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Detail</th>
                                <th />
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.detail}</td>
                                    <td>
                                        <Link to={{
                                            pathname: '/edit', state: { data: e }
                                        }}>
                                            <Button size="122px" color='primary'><IcoEdit/> Edit</Button>  
                                        </Link>
                                    </td>
                                    <td><Button color='danger' onClick={() => { handleDelete(e) }}><IcoDelete/> Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    :
                        <Loader
                            type="Watch"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        //timeout={2000} //3 secs
                        />
                    }

                <CardHeader>
                    <Link to="/create"> <Button style={{ color: 'white' }} color="success"><IcoAdd/> Create </Button> </Link>
                </CardHeader>
            </CardBody>
        </Card>
        </Container>
    );
}

export default Home;