import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from "react";
import { getOrders } from "./../consultasBack"
import { useDispatch } from 'react-redux'; // *useDispatch* es para hacer algo, son las funciones que queremos llamar para actualizar el estado.
import { getOrderSuccess } from "../features/orders/orderSlice";
import { useSelector } from 'react-redux/es/hooks/useSelector';// *useSelector* es para traer algo, es la forma en la que podemos traer los datos dentro del estado.



const Orders =  () =>{  
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    const userFound = useSelector(state => state.users.userFound);
    console.log(userFound);
    useEffect(()=>{
      const obtenerDatosOrder = async () => {
        try {
          const response = await getOrders();
          const data = await response;
          if(data){
            console.log(data.body)
            dispatch(getOrderSuccess(data.body));
          }
        } catch (error) {
          console.error(`Error al obtener datos del usuario: ${error.message}`);
        }
      };
      obtenerDatosOrder();
    }, [dispatch])

    return(
      
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          { userFound.rol ===  1 && orders.map(order => (
            <>
             <Accordion.Item key={order.id} eventKey={order.id -1}>
            <Accordion.Header>ID del usuario : {order.userId}</Accordion.Header>
            <Accordion.Body>
          <h3> Nombre del Cliente : {order.nombre}</h3>
          <h3>Nombre del Producto : {order.producto}</h3>
          </Accordion.Body>
          </Accordion.Item>
          </>
          ))}
          
      </Accordion>
    )
}

export default Orders;