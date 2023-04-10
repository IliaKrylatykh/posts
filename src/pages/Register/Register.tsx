import { useForm } from 'react-hook-form'
import styles from './register.module.scss'

const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<div className={styles.registerContainer}>
			<div className={styles.formContainer}>
				<div className={styles.title}>Регистрация</div>
				<div className={styles.errors}>
					{(errors?.name && <p>"Введите имя (min 3 символа)"</p>) ||
						(errors?.email && <p>"Введите email"</p>) ||
						(errors?.password && <p>"Введите пароль"</p>)}
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.name}>
						<div className={styles.titleName}>Имя пользователя:</div>
						<input
							{...register('name', {
								required: 'Укажите имя',
								minLength: 3,
							})}
							type='text'
							placeholder='Введите имя'
						/>
					</div>
					<div className={styles.email}>
						<div className={styles.titleEmail}>E-Mail:</div>
						<input
							{...register('email', {
								required: true,
							})}
							type='text'
							placeholder='Введите E-Mail'
						/>
					</div>
					<div className={styles.password}>
						<div className={styles.titlePassword}>Пароль:</div>
						<input
							{...register('password', {
								required: true,
							})}
							type='text'
							placeholder='Введите пароль'
						/>
					</div>
					<button className={styles.submitButton}>Зарегистрироваться</button>
				</form>
			</div>
		</div>
	)
}

export default Register
