

import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '@/reducers/CartSlice'


export default configureStore({
    reducer: {
        cart: CartSlice,
    }
})