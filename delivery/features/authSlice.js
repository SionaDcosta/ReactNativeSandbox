import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//A thunk is a function that wraps another function to delay its execution.

import AsyncStorage from '@react-native-async-storage/async-storage'

// Load authentication state and username from AsyncStorage
export const loadAuthState = createAsyncThunk(
    'auth/loadAuthState',
    async () => {
        const isAuthenticated = await AsyncStorage.getItem('isAuthenticated')
        const username = await AsyncStorage.getItem('username')
        return {
            isAuthenticated: isAuthenticated === 'true',
            username: username || '',
        }
    }
)

// Save authentication state and username to AsyncStorage
export const saveAuthState = createAsyncThunk(
    'auth/saveAuthState',
    async ({ isAuthenticated, username }) => {
        await AsyncStorage.setItem(
            'isAuthenticated',
            isAuthenticated.toString()
        )
        if (username) {
            await AsyncStorage.setItem('username', username)
        } else {
            await AsyncStorage.removeItem('username')
        }
        return { isAuthenticated, username }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        username: '',
        status: 'idle',
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.username = action.payload.username
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAuthState.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.isAuthenticated
                state.username = action.payload.username
            })
            .addCase(saveAuthState.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.isAuthenticated
                state.username = action.payload.username
            })
    },
})

export const { setAuthenticated } = authSlice.actions

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectUsername = (state) => state.auth.username

export default authSlice.reducer
