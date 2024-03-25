import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from 'prop-types';


const AppState = (props) => {
    const [state, setState] = useState({
        user: null,
        loggedIn: false,
    })
    const login = (user) => {
        setState({
            user,
            isLoggedIn: true,
            role: user.role
        })
    }
    const userinfo = async() => {
        const user = await localStorage.getItem("user")
        return user
    }
    const roleis = async () => {
        const roleis = await userinfo.role
        return roleis
    }
    function isAdmin() {
        if(roleis === "admin") {
            return true
        }
        else {
            return false
        }
    }
    const logout = () => {
        setState({
            user: null,
            isLoggedIn: false,
            role: null
        })
    }

    return (
        <AppContext.Provider value={{ isAdmin, roleis, state, login, logout }}>
            {props.children}
        </AppContext.Provider>
    )  
}

AppState.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppState