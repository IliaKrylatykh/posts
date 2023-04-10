import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchUserAuth } from './ActionCreators'

interface UserState {
	data: IUser[]
	isLoading: boolean
	error: string
}

const initialState: UserState = {
	data: [],
	isLoading: false,
	error: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserAuth.pending.type]: state => {
			state.isLoading = true
			state.data = []
		},
		[fetchUserAuth.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
		[fetchUserAuth.rejected.type]: (state, action: PayloadAction<string>) => {
			state.data = []
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default authSlice.reducer
