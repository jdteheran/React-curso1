import React from 'react';
import Fruta from './components/Fruta' 

class App extends React.Component {

    state = {
        total: 0
    }

    total = (parametro) => {
        console.log(parametro);
       // this.setState({total: (this.state.total - parametro) + this.state.total})
    }

    render() {
        return (
            <>
                <Fruta name='Manzana' price={4} bus={this.total}/>
                <Fruta name='Fresa' price={3} bus={this.total}/>
                <Fruta name='Mango' price={5} bus={this.total}/>
    
                <p><strong>Gran Total:</strong> {this.state.total}</p>
            </>
        )
    }
}

export default App