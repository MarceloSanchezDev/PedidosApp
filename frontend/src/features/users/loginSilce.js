import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',// nombre de la accion
    initialState : [],
    reducers :{//aqui vamos a poder crear funciones para poder actualizar el estado inicial.
        //estas funciones las vamos a poder user en cualquier parte de la aplicacion
        userLog: (state /*accede al estado actual*/,action) =>{
            const userFound = state.users.find(user => user.username === action.payload.username && user.password === action.payload.password) // encuentra el usuario dentro del arreglo *users*
            if(userFound){//si el usuario es encontrado 
                state.userFound = userFound; //establezo el nuevo estado a *userFound*
            }else{
                console.log("no se encontro el user")//sino manda este mensaje
                state.userFound = null; // dejo como estaba *userFound*
            }
        },
        userSesionOut: (state) => {
            state.userFound = null; // Establecer el estado de userFound a null
          },
    }
});


export const {userLog, userSesionOut} = usersSlice.actions;
export default usersSlice.reducer; 