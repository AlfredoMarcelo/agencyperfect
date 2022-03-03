import { Redirect, Route } from 'react-router-dom'


const Privada = ({component: Component, otherProps}) => {
    const isAuth = sessionStorage.getItem("isAuth");
    return <Route {...otherProps} render={(props) => isAuth ? <Component {...props}/> : <Redirect to="/login"/> }></Route>
}

export default Privada;