import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchPosts, fetchUserAuth } from '../../store/reducers/ActionCreators'
import PostCard from '../PostCard/PostCard'
import styles from './postsContainer.module.scss'

const PostsContainer = () => {
	const dispatch = useAppDispatch()
	const posts = useAppSelector(state => state.postReducer)

	const isPostsLoading = posts.isLoading

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	const postText =
		'Сайт текст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали известный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия. По своей сути текст является альтернативой традиционному lorem ipsum, который вызывает у людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.'

	return (
		<div className={styles.container}>
			{(isPostsLoading ? [...Array(6)] : posts.posts).map((post, index) =>
				isPostsLoading ? (
					<div key={index}>Post skeleton will be here</div>
				) : (
					<PostCard
						key={post._id}
						id={post._id}
						title={post.title}
						text={post.text.slice(0, 400) + '...'}
						views={post._id}
					/>
				)
			)}
		</div>
	)
}

export default PostsContainer
