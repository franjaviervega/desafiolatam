import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutActionCreator } from './../../store/modules/auth/login.action';
import { Button} from 'reactstrap';

const Logout = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => { 
        dispatch(logoutActionCreator());
        props.history.push('/')
    }
    return (
        <div className="mb-4">
            <Button onClick={logout} className="alert-danger">
                Cerrar Sesión
            </Button>
        </div>
    );
}

export default Logout;