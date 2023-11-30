import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Orders from "./Orders";

const PagAdmin =  () => {
    return(
      <>
         <CloseButton />
        <h1>PaginaAdmin</h1>
        <Orders />
      </>
    );
}

export default PagAdmin;