import React from 'react'

class Fruta extends React.Component {

    render() {
        return (
            <div>
                <h3>Titulo</h3>
                <p>Precio</p>
                <p>Cantidad</p>
                <p><strong>Total:</strong></p>

                <button>+</button>
                <button>-</button>
                <button>Limpiar</button>
                <hr/>
            </div>
        )

    }
}

export default Fruta