import styles from './poster.module.scss'

const Poster = () => {
	return (
		<div className={styles.poster}>
			<div className={styles.posterInfo}>
				<div className={styles.posterTitle}>THE FIRST MAN WAS ON JUPITER</div>
				<div className={styles.posterText}>
					this incredible event happened because now we can move to live on
					Jupiter! we destroyed 5 planets from oursolar system to survive, but
					we won't touch jupiter, it's so big!
				</div>
			</div>
		</div>
	)
}

export default Poster
