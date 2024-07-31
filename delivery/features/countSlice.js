import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    vegCount: 0,
    nonVegCount: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        incrementVegCount: (state) => {
            state.vegCount += 1
        },
        incrementNonVegCount: (state) => {
            state.nonVegCount += 1
        },
    },
})

export const { incrementVegCount, incrementNonVegCount } = countSlice.actions

export default countSlice.reducer
