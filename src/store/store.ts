import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	default as authReducer,
	default as postReducer,
} from './reducers/PostSlice'

const rootReducer = combineReducers({
	postReducer,
	authReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
