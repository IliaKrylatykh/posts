import PostCard from '../PostCard/PostCard'
import styles from './postsContainer.module.scss'

const PostsContainer = () => {
	return (
		<div className={styles.container}>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	)
}

export default PostsContainer
