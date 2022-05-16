import React, {useState, useEffect} from 'react';
import Fruta from './components/Fruta'
import CheckIn from './components/CheckIn';

const App = () => {
    
    const [state, setState] = useState({
        total: {
            manzana: 0,
            fresa: 0,
            mango: 0
        }
    });

    useEffect(() => {
        console.log(state)
    },[state.total.fresa])
    

    const total = (parametro) => {
        if (parametro.id == "Manzana") {
            setState({total: {...state.total,manzana: parametro.precio * parametro.cantidad}})
        } 
        if (parametro.id == "Fresa") {
            setState({total: {...state.total,fresa: parametro.precio * parametro.cantidad}})
        }
        if (parametro.id == "Mango") {
            setState({total: {...state.total,mango: parametro.precio * parametro.cantidad}})
        }
    }

    const {manzana, fresa, mango} = state.total
    return (
        <>
            <Fruta name='Manzana' price={4} bus={total}  />
            <Fruta name='Fresa' price={3} bus={total} />
            <Fruta name='Mango' price={5} bus={total} />

            <CheckIn total={manzana + fresa + mango} />
        </>
    )
}

export default App;