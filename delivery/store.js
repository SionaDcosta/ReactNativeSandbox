import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'
import authReducer from './features/authSlice'
import countReducer from './features/countSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer,
        auth: authReducer,
        count: countReducer,
    },
})
