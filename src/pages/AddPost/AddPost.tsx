import styles from './addPost.module.scss'

const AddPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bg}>
				<div className={styles.poster}></div>
				<div className={styles.fill}></div>
			</div>
			<div className={styles.postContainer}>
				<div className={styles.addCover}>Add cover +</div>

				<div className={styles.textContainer}>
					<div className={styles.authorInfoContainer}>author</div>
					<div className={styles.titleContainer}>
						<input type='text' placeholder='add title' />
					</div>
					<input
						className={styles.textInput}
						type='text'
						placeholder='add a description of the news'
					/>
				</div>
			</div>
		</div>
	)
}

export default AddPost
