import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Orders from "./Orders";


const PagUser =  () => {
    return(
        <>
        <CloseButton />
        <h1>PaginaUser</h1>
        <Orders />
    </>
    );
}

export default PagUser;