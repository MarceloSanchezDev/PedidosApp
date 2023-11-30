import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagAdmin from './components/PagAdmin';
import PagUser from './components/PagUser';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
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
