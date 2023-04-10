import { useState } from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import HeaderSvg from './HeaderSvg'
import styles from './header.module.scss'

const Header = () => {
	const [isLogged, setLogged] = useState(false)

	const toggleLogged = () => {
		setLogged(!isLogged)
	}

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
			<div className={styles.date}>
				<Moment format='D MMM, HH:mm' interval={1000} />
			</div>
			{isLogged ? (
				<div className={styles.pages}>
					<Link to='/' className={styles.linkText}>
						<div>Home</div>
					</Link>
					<Link to='/' className={styles.linkText}>
						<div>Discussions</div>
					</Link>
					<Link to='/' className={styles.linkText}>
						<div className={styles.themes}>
							<div>Themes</div>
							<div className={styles.themeImg}>
								<HeaderSvg id='themesMenu' />
							</div>
						</div>
					</Link>
					<Link to='/posts'>
						<HeaderSvg id='add' />
					</Link>

					<HeaderSvg id='bell' />
					<Link to='/' onClick={toggleLogged}>
						<img
							className={styles.userProfile}
							src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg'
							alt='user'
						/>
					</Link>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						width: '400px',
						justifyContent: 'space-between',
					}}
				>
					<Link to='/' className={styles.linkText}>
						Home
					</Link>
					<Link to='/login' className={styles.linkText}>
						Login
					</Link>
					<Link
						to='/register'
						onClick={toggleLogged}
						className={styles.linkText}
					>
						<div>Register now!</div>
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
