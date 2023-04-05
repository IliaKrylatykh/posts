import { Link } from 'react-router-dom'

import styles from './postCard.module.scss'

const PostCard = () => {
	const _id: number = 123
	return (
		<div className={styles.postCard}>
			<div className={styles.postInfo}>
				<div className={styles.date}>February 2, 20:02</div>

				<Link to={`/posts/${_id}`} className={styles.title}>
					Title
				</Link>
				<div className={styles.text}>
					the remnants of the moon are completely gone. this happened quite
					recently on February 2 at 20:00. Earth's satellite has left the solar
					system. we will always remember you. I have never written so much
					water anywhere, but I have to get out. there should be so much text
					that it is simply impossible how can.
				</div>
			</div>
			<div className={styles.actions}>--likes comments share--</div>
		</div>
	)
}

export default PostCard
