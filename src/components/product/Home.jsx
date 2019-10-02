import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAsyncCreatorGetAll, productAsyncCreatorDelete } from './../../store/modules/product/product.action'
import { Button, Card, CardHeader, CardBody, Table, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";

const Home = (props) => {
    const dispatch = useDispatch();
    /*const handled = () => {
        dispacth(productAsyncCreatorGetAll())
    }*/

    useEffect(() => {
        dispatch(productAsyncCreatorGetAll());
    }, []);

    const data = useSelector(datos => datos.product.getAll.data);
    const handleDelete = (e) => {
        let array = {
            "id": e.id,
            "name": e.name,
            "price": e.price,
            "detail": e.detail
        }
        dispatch(productAsyncCreatorDelete(e))
        props.history.push("/product");
    }
    return (
        <Card>
            <CardBody>

                {data && <Table>
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
                                <td><Button color='primary'>Edit</Button></td>
                                <td><Button color='danger' onClick={() => { handleDelete(e) }}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                }
                <CardHeader>
                    <Link to="/create"> <Button style={{ color: 'white' }} color="success"> Create </Button> </Link>
                </CardHeader>
            </CardBody>
        </Card>
    );
}

export default Home;