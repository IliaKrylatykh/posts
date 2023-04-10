import { $CombinedState, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Poster from '../components/Poster/Poster'
import PostsContainer from '../components/PostsContainer/PostsContainer'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { postsReducer } from '../redux/slices/posts'
import { fetchPosts } from '../store/reducers/ActionCreators'

const Home = () => {
	// const dispatch = useAppDispatch()
	// const posts = useAppSelector(state => state.postReducer)

	// const isPostsLoading = posts.isLoading

	// useEffect(() => {
	// 	dispatch(fetchPosts())
	// }, [])

	return (
		<>
			<Poster />
			<PostsContainer />
		</>
	)
}

export default Home
