import React from "react";
import { Link } from 'react-router-dom';

class CheckIn extends React.Component {

    componentWillUnmount() {
        console.log('Ultima voluntad de Checkin');
    }

    render() {
        return (
            <>
                <Link to={'/'}>Vamonos para Fruta</Link>
                <p>Total a pagar: {this.props.total}</p>
                <button>Pagar</button>
            </>
        )
    }
}

export default CheckIn