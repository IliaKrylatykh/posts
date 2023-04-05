import { ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Poster from '../components/Poster/Poster'
import PostsContainer from '../components/PostsContainer/PostsContainer'
import { fetchPosts } from '../redux/slices/posts.js'

const Home = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<>
			<Poster />
			<PostsContainer />
		</>
	)
}

export default Home
