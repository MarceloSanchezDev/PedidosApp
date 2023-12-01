import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [], // Aquí almacenarás los usuarios obtenidos
  userFound: null,
};




export const usersSlice = createSlice({
    name: 'users',// nombre de la accion
    initialState,
    reducers :{//aqui vamos a poder crear funciones para poder actualizar el estado inicial.
      //estas funciones las vamos a poder user en cualquier parte de la aplicacion
      getUsersSuccess: (state, action) => {
        state.users = action.payload; // Guardar los usuarios obtenidos en el estado
      },
      userLog: (state/*accede al estado actual*/, action) => {
        console.log(action.payload.username)
        const userFound = state.users.find(user => user.usuario === action.payload.username) // encuentra el usuario dentro del arreglo *users*
        if(userFound){
        state.userFound = userFound;
        console.log(userFound);
        }else{
          console.log("no se encotro usuario")
        }
      },
      userSesionOut: (state) => {
        state.userFound = null; // Establecer el estado de userFound a null
      }
    }
});


export const {userLog, getUsersSuccess , userSesionOut,  userFound} = usersSlice.actions;
export default usersSlice.reducer; 