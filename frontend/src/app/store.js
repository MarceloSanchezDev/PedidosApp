import {configureStore} from '@reduxjs/toolkit'
import orderReducer from '../features/orders/orderSlice'
import userReducer from '../features/users/loginSilce'

/*lo que hace *configureStore* es agrupar todos los datos o estados para poder acceder a ellos mas facil. */
export const store = configureStore({
    reducer: { //los datos y estados van dentro de un objeto llamado *reducers*.
        orders : orderReducer,  // nombre del estado
        users : userReducer // nombre del estado
    }
})