import { Link } from 'react-router-dom'

import styles from './header.module.scss'
import HeaderSvg from './HeaderSvg'

const Header = () => {
	const isAuth = false

	return (
		<header className={styles.header}>
			<div className={styles.navigation}>
				<div className={styles.menu}>
					<HeaderSvg id='menu' />
				</div>
				<div className={styles.search}>
					<div className={styles.searchImg}>
						<HeaderSvg id='search' />
					</div>
					<input className={styles.input} type='text' placeholder='Search' />
				</div>
			</div>
			<div className={styles.date}>8 февраля, 20:20</div>
			{isAuth ? (
				<div className={styles.pages}>
					<Link to='/' className={styles.linkHome}>
						<div>Home</div>
					</Link>
					<div>Discussions</div>
					<div className={styles.themes}>
						<div>Themes</div>
						<div className={styles.themeImg}>
							<HeaderSvg id='themesMenu' />
						</div>
					</div>
					<HeaderSvg id='add' />
					<HeaderSvg id='bell' />
					<img
						className={styles.userProfile}
						src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg'
						alt='user'
					/>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						width: '400px',
						justifyContent: 'space-between',
					}}
				>
					<Link to='/'>Home</Link>
					<Link to='/login'>Login</Link>
					<Link to='/register'>
						<div>Register now!</div>
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
