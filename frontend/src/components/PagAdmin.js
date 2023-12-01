import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Orders from "./Orders";
import { userSesionOut } from "../features/users/loginSilce";
import { useDispatch } from "react-redux";

const PagAdmin =  () => {
  const dispatch = useDispatch();

    const hundlerlogOut = () =>{
      dispatch(userSesionOut());
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