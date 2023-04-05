import styles from './login.module.scss'

const Login = () => {
	return (
		<div>
			<div className={styles.loginContainer}>
				<div className={styles.loginTitle}>Вход в аккаунт</div>
				<div className={styles.form}>
					<input type='text' placeholder='E-Mail' />
					<input type='text' placeholder='Пароль' />
					<button>Войти</button>
				</div>
			</div>
		</div>
	)
}

export default Login
