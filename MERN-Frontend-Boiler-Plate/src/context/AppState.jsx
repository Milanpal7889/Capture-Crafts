import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import axios from "axios";

const AppState = (props) => {
  const [state, setState] = useState({
    user: null,
    loggedIn: false,
    cityslist: [],
  });

  const cityslist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/allcities"
      );
      if (!response?.data?.error) {
        const citysDatares = await response?.data;
        setState.cityslist = citysDatares?.Data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = (user) => {
    setState({
      user,
      isLoggedIn: true,
      role: user.role,
    });
  };
  const userinfo = async () => {
    const user = await localStorage.getItem("user");
    return user;
  };
  const roleis = async () => {
    const roleis = await userinfo.role;
    return roleis;
  };
  function isAdmin() {
    if (roleis === "admin") {
      return true;
    } else {
      return false;
    }
  }
  const logout = () => {
    setState({
      user: null,
      isLoggedIn: false,
      role: null,
    });
  };

  return (
    <AppContext.Provider value={{ cityslist, isAdmin, roleis, state, login, logout }}>
      {props.children}
    </AppContext.Provider>
  );
};

AppState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppState;
