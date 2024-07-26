import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    restaurantId: null, // Track the current restaurant's ID
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const { restaurantId: newRestaurantId, ...item } = action.payload
            if (state.restaurantId && state.restaurantId !== newRestaurantId) {
                state.items = [item] // Replace items in the basket
                state.restaurantId = newRestaurantId
            } else {
                state.items = [...state.items, item]
                state.restaurantId = newRestaurantId
            }
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            let newBasket = [...state.items]
            if (index >= 0) {
                newBasket.splice(index, 1) // Remove item from the basket
                if (newBasket.length === 0) {
                    state.restaurantId = null // Reset restaurant ID if basket is empty
                }
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it's not in the basket!`
                )
            }
            state.items = newBasket
        },
        clearBasket: (state) => {
            state.items = []
            state.restaurantId = null // Clear the basket and reset restaurant ID
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, clearBasket } =
    basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id)

export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0)

export const selectRestaurantId = (state) => state.basket.restaurantId

export default basketSlice.reducer
