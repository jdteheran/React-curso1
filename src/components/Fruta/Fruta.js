import React from 'react'
import { Link } from 'react-router-dom';

class Fruta extends React.Component {

    state = {
        cantidad: 0
    }

    componentWillUnmount() {
        console.log('Ultima voluntad de fruta');
    }

    agregar = () => {

        const nueva_cantidad = this.state.cantidad + 1

        this.props.bus({
            id: this.props.name,
            cantidad: nueva_cantidad,
            precio: this.props.price
        })

        this.setState({
            cantidad: nueva_cantidad
        })
    }

    quitar = () => {
        const nueva_cantidad = this.state.cantidad - 1

        this.props.bus({
            id: this.props.name,
            cantidad: nueva_cantidad,
            precio: this.props.price
        })

        this.setState({
            cantidad: nueva_cantidad
        })
    }

    limpiar = () => {
        const nueva_cantidad = 0

        this.props.bus({
            id: this.props.name,
            cantidad: nueva_cantidad,
            precio: this.props.price
        })

        this.setState({
            cantidad: nueva_cantidad
        })
    }

    render() {
        return (
            <div>


                <Link to={'/hola'}>Vamonos para CheckIn</Link>

                <h3>{this.props.name}</h3>
                <p>Precio: {this.props.price}</p>
                <p>Cantidad: {this.state.cantidad} </p>
                <p><strong>Total:</strong> {this.props.price * this.state.cantidad}</p>

                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <hr/>
            </div>
        )

    }
}

export default Fruta