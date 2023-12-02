import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux/es/hooks/useSelector';// *useSelector* es para traer algo, es la forma en la que podemos traer los datos dentro del estado.


const Orders =  () =>{  
    const userFound = useSelector(state => state.users.userFound);
    console.log(userFound)
    const orders = useSelector(state => state.orders[0])
    console.log('Datos de los pedidos:', orders);
    const orderUser = orders.filter(order => order.userId === userFound.id)
    console.log(orderUser);
    
    return(
      
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          { userFound !== null && userFound.id !== undefined && userFound.rol ===  1 && orders.map(order => (
            
              <Accordion.Item key={order.id} eventKey={order.id }>
                  <Accordion.Header>Id del usuario : {order.userId}</Accordion.Header>
                  <Accordion.Body>
                      <h3> Nombre del Cliente : {order.nombre}</h3>
                      <h3>Nombre del Producto : {order.producto}</h3>
                      <p>Id del pedido : {order.id}</p>
                  </Accordion.Body>
              </Accordion.Item>
          
          ))}
          {userFound !== null && userFound.id !== undefined && userFound.rol === 0 && orderUser.map(order => (
            
              <Accordion.Item key={order.id} eventKey={order.id}>
                  <Accordion.Header>Id del usuario: {order.userId}</Accordion.Header>
                  <Accordion.Body>
                      <h3> Nombre del Cliente : {order.nombre}</h3>
                      <h3>Nombre del Producto : {order.producto}</h3>
                      <p>Id del usuario : {order.userId}</p>
                      <p>Id del pedido : {order.id}</p>
                  </Accordion.Body>
              </Accordion.Item>
          
          ))}
        </Accordion>
    )
}

export default Orders;