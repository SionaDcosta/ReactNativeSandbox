import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer,
        auth: authReducer,
    },
})
