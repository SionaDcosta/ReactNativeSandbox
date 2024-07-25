// src/selectors.js
import { createSelector } from 'reselect'

// Input selectors
const selectBasketItems = (state) => state.basket.items
const selectBasketItemId = (state, id) => id

// Memoized selectors
export const getBasketItemsWithId = createSelector(
    [selectBasketItems, selectBasketItemId],
    (items, id) => items.filter((item) => item.id === id)
)
