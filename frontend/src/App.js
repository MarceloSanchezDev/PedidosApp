import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagAdmin from './components/PagAdmin';
import PagUser from './components/PagUser';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { getOrders } from "./consultasBack"
import { getUsers } from './consultasBack';
import { useDispatch } from 'react-redux'; // *useDispatch* es para hacer algo, son las funciones que queremos llamar para actualizar el estado.
import { getOrderSuccess } from "./features/orders/orderSlice";
import {getUsersSuccess} from './features/users/loginSilce'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const obtenerDatosUsuario = async () => {
        try {
          const response = await getUsers();
          const data = await response;
          if(data){
            console.log(data.body)
            dispatch(getUsersSuccess(data.body));
            console.log(getUsersSuccess(data.body))
          }
        } catch (error) {
          console.error(`Error al obtener datos del usuario: ${error.message}`);
        }
      };
      
    obtenerDatosUsuario();
  }, [dispatch]);
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
  return (
    
    <div>
     <BrowserRouter> {/*es el enrutador*/}
      <Routes> {/*Ruta*/}
        <Route /*unica ruta*/
           path='/' /*ruta inicial*/
           element={<Login/>}/*componente que va a ser renderizado en esta ruta*/
           />
        <Route /*unica ruta*/
           path='/pagAdmin' /*ruta inicial*/
           element={<PagAdmin/>}/*componente que va a ser renderizado en esta ruta*/
           /> 
          <Route /*unica ruta*/
           path='/pagUser' /*ruta inicial*/
           element={<PagUser/>}/*componente que va a ser renderizado en esta ruta*/
           />    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
