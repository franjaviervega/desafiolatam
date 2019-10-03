import React from 'react';
import { Form, FormGroup, Input, Button, Label, CardHeader, Container } from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput'
import { useDispatch } from 'react-redux';
import {productAsyncCreatorEdit} from './../../store/modules/product/product.action';
import { Link } from "react-router-dom";



const FormEdit = (props) => { 
    const data = props.location.state;
    const id = data.data.id;
    const name = useGenericInput(data.data.name, 'text');
    const price = useGenericInput(data.data.price, 'text');
    const detail = useGenericInput(data.data.detail, 'text')
    const dispatch = useDispatch();
    const buttonIsDisabled = () => name.value === '' || price.value === '' || detail.value === '';

    const handled = (e) => {
        e.preventDefault();
        let array = {
            "id": id,
            "name": name.value,
            "price": price.value,
            "detail": detail.value
        }
        dispatch(productAsyncCreatorEdit(array));
        setTimeout(() => {
            props.history.push("/product");
        }, 100);
    }

    return (
        <Container>
            <CardHeader>
                <h3>Edit</h3>
            </CardHeader>
            <Form onSubmit={handled}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input {...name} />
                </FormGroup>
                <FormGroup>
                    <Label>Price</Label>
                    <Input {...price} />
                </FormGroup>
                <FormGroup>
                    <Label>Detail</Label>
                    <Input {...detail} />
                </FormGroup>
                <Button color='success' className="float-right" disabled={buttonIsDisabled()} type="submit" >Save</Button>

                <Link to="/product">
                    <Button color='danger' className="float-left" type="submit"  >Cancel</Button>
                </Link>

            </Form>
        </Container>
    )
}

export default FormEdit;