import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput'
import { productAsyncCreatorCreate } from './../../store/modules/product/product.action';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";



const FormCreate = (props) => {
    const name = useGenericInput('', 'text');
    const price = useGenericInput('', 'text');
    const detail = useGenericInput('', 'text')

    const dispatch = useDispatch();
    const [registro, setRegistro] = useState(false);
    const buttonIsDisabled = () => name.value === '' || price.value === '' || detail.value === '';


    const handled = (e) => {
        e.preventDefault();
        let array = {
            "name": name.value,
            "price": price.value,
            "detail": detail.value
        }
        dispatch(productAsyncCreatorCreate(array));
        setRegistro(true);
        props.history.push("/product");


    }

    useEffect(() => {
        // props.history.push("/peliculas"); 

        // props.history('/peliculas')
    }, [registro])



    return (
        <div>
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
                <Button color='success' className="float-right" disabled={buttonIsDisabled()} type="submit" >Add</Button>
                
                <Link to="/product">
                    <Button color='danger' className="float-left" type="submit"  >Cancel</Button>
                </Link>

            </Form>
        </div>
    )
}

export default FormCreate;