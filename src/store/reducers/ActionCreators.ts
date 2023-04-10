import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'
import { IPost } from '../../types/types.js'
import { AppDispatch } from '../store'
import { postSlice } from './PostSlice'

// export const fetchPosts = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(postSlice.actions.postsFetching())
// 		const response = await axios.get('/posts')
// 		dispatch(postSlice.actions.postsFetchingSuccess(response.data))
// 	} catch (e: any) {
// 		dispatch(postSlice.actions.postsFetchingError(e.message))
// 	}
// }

export const fetchPosts = createAsyncThunk(
	'posts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IPost[]>('/posts')
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка при загрузке постов')
		}
	}
)

interface UserAuth {
	email: string
	password: string
}

export const fetchUserAuth = createAsyncThunk(
	'auth/fetchUserAuth',
	async (params: UserAuth) => {
		const { data } = await axios.post('/auth/login', params)
		return data
	}
)
