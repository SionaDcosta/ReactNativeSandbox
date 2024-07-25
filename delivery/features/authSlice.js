import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const loadAuthState = createAsyncThunk(
    'auth/loadAuthState',
    async () => {
        const isAuthenticated = await AsyncStorage.getItem('isAuthenticated')
        return isAuthenticated === 'true'
    }
)

export const saveAuthState = createAsyncThunk(
    'auth/saveAuthState',
    async (isAuthenticated) => {
        await AsyncStorage.setItem(
            'isAuthenticated',
            isAuthenticated.toString()
        )
        return isAuthenticated
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        status: 'idle',
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAuthState.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload
            })
            .addCase(saveAuthState.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload
            })
    },
})

export const { setAuthenticated } = authSlice.actions

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated

export default authSlice.reducer
