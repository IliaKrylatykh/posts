import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IPost } from '../../types/types'
import styles from './postCard.module.scss'

const PostCard = ({ id, title, text, views }: IPost) => {
	const _id: number = 123

	return (
		<div className={styles.postCard}>
			<div className={styles.postInfo}>
				<div className={styles.date}>February 2, 20:02</div>

				<Link to={`/posts/${_id}`} className={styles.title}>
					{title}
				</Link>
				<div className={styles.text}>{text}</div>
			</div>
			<div className={styles.actions}>
				--likes comments share--
				<div>Просмотров: {views}</div>
			</div>
		</div>
	)
}

export default PostCard
