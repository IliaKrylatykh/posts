const Register = () => {
	return (
		<div>
			<div className='registerContainer'>
				<div className='registerTitle'></div>
				<div className='avatar'></div>
				<div className='form'>
					<input type='text' placeholder='Полное имя' />
					<input type='text' placeholder='E-Mail' />
					<input type='text' placeholder='Пароль' />
					<button>Зарегистрироваться</button>
				</div>
			</div>
		</div>
	)
}

export default Register
