const Login = () => {
	const isActive = false
	return (
		<section className={["registraiton__wrapper", isActive ? 'active' : ""].join(' ')}>
		<div className="overlay"></div> 
			<button className="close">×</button>
		  <p>Войти в аккаунт</p>
		  <input type="email" placeholder="Введите ваш email" />
		  <input type="password" placeholder="Введите ваш пароль"/>
		  <button>Продолжить</button>
	  </section>
	)
}
export default Login