import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const orderSlice = createSlice({
    name : 'orders', // nombre de la accion
    initialState, //cuando la aplicacion inicie el estado de esta tarea va a inicializar a la variable *initialState*
    reducers: { //aqui vamos a poder crear funciones para poder actualizar el estado inicial.
        //estas funciones las vamos a poder user en cualquier parte de la aplicacion
        getOrderSuccess: (state, action) => {
            state.splice(0, state.length, ...action.payload); // Reemplaza el contenido del estado por los nuevos datos
            console.log(state);
          },
        deleteOrder: (state/*accede al estado actual*/, action) =>{
            //defino la variable *taskFound* 
            const orderFound = state.find(order => order.Id === action.payload) //que busca en el arreglo *state* un elemento con el *id* igual al que recibe por parametro. 
            if(orderFound){//si la tarea es encontrada
                state.splice(//quita la tarea 
                            state.indexOf(orderFound),//se ubica en el index que recibe por parametro.
                            1//solo saca 1 elemento.
                            )
            }
        }
    },
});


export const {deleteOrder, getOrderSuccess} = orderSlice.actions//desde *orderSlice.actions*
export default orderSlice.reducer;//aqui solo exporto los *reducers* de *orderSlice*