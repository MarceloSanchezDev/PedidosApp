import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');// utilizo el hook useState para cambiar el estado de la variable *username* que inicializa vacia.
    const [password, setPassword] = useState('');// utilizo el hook useState para cambiar el estado de la variable *password* que inicializa vacia.
    
    
  
  
  
  
    return (
    <div>
    <h1>Log In</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicusername">
        <Form.Label>Usrname</Form.Label>
        <Form.Control type="text" value={username}//valor inicial de *username*
         placeholder="Enter username" name='username' onChange={(e) => setUsername(e.target.value)} /*se toma el valor nuevo de *username* cuando se escriba dentro del input username*//>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}//valor inicial de *password*
        name='password'onChange={(e) => setPassword(e.target.value)}/*se toma el valor nuevo de *password* cuando se escriba dentro del input password *//>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    </div>
  );
}

export default Login;