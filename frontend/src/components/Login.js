import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';//es una funcion que redirecciona el usuario a la ruta indicada.
import { useDispatch } from 'react-redux'; // *useDispatch* es para hacer algo, son las funciones que queremos llamar para actualizar el estado.
import { useSelector } from 'react-redux/es/hooks/useSelector';// *useSelector* es para traer algo, es la forma en la que podemos traer los datos dentro del estado.
import { userLog } from '../features/users/loginSilce'// importo el action *userlog*

const Login = () => {
    const [username, setUsername] = useState('');// utilizo el hook useState para cambiar el estado de la variable *username* que inicializa vacia.
    const [password, setPassword] = useState('');// utilizo el hook useState para cambiar el estado de la variable *password* que inicializa vacia.
    const dispatch = useDispatch() //es una funcion que me permite disparar eventos desde el *Slice*
    const navigate = useNavigate() //es una funcion que redirecciona el usuario a la ruta indicada.
    const userFound = useSelector(state => state.users.userFound)
    
    const handleSubmit = (e) =>{ //creo la funcion *handleSumit* que recibe por parametro un *evento*.
      e.preventDefault();//evito que el formulario se envie y refresque la pagina para que la funcion *handleSumit* maneje la autenticacion.
      //busco el usuario en el arrelgo de *users
       dispatch(userLog({ username }));
      };

      //verifico si el usuario y contraseña existen en el array.
   useEffect(() => { //utulizo el hook useEffect para renderizar algo si cambia el estado de 
        // Esta parte del código se ejecuta cuando el estado se actualiza
        if (userFound !== null) {
                if(userFound.rol === 1){
                    navigate('/pagAdmin')    
                } else {
                    navigate('/pagUser')
                } 
            }else{
                navigate('/')
            }          
      }, [navigate, userFound]);




    return (
    <div>
    <h1>Log In</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicusername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username}//valor inicial de *username*
         placeholder="Enter username" name='username' onChange={(e) => setUsername(e.target.value)} /*se toma el valor nuevo de *username* cuando se escriba dentro del input username*//>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}//valor inicial de *password*
        name='password'onChange={(e) => setPassword(e.target.value)}/*se toma el valor nuevo de *password* cuando se escriba dentro del input password *//>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Log In
      </Button>
    </Form>
    </div>
  );
}

export default Login;