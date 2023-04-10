import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUserAuth } from '../../store/reducers/ActionCreators'
import styles from './login.module.scss'

const Login = () => {
	const dispatch = useAppDispatch()

	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: 'test1@test.ru',
			password: '12345',
		},
	})

	const onSubmit = (values: any) => {
		dispatch(fetchUserAuth(values))
	}

	return (
		<div>
			<div className={styles.loginContainer}>
				<div className={styles.loginTitle}>Вход в аккаунт</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='E-Mail'
						{...register('email', { required: 'Укажите почту' })}
					/>
					<input
						type='text'
						placeholder='Пароль'
						{...register('password', { required: 'Укажите пароль' })}
					/>
					<button>Войти</button>
				</form>
			</div>
		</div>
	)
}

export default Login
