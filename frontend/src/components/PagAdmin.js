import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Orders from "./Orders";
import { userSesionOut } from "../features/users/loginSilce";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';//importo *useNavigate* que es una funcion que redirecciona el usuario a la ruta indicada.

const PagAdmin =  () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const hundlerlogOut = () =>{
      dispatch(userSesionOut());
      navigate('/')
  }


    return(
      <>
         <CloseButton onClick={hundlerlogOut}/>
        <h1>PaginaAdmin</h1>
        <Orders />
      </>
    );
}

export default PagAdmin;