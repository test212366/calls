const Registration = () => {
	const isActive = false
	return (
 
	 
		<section className={["registraiton__wrapper", isActive ? 'active' : ""].join(' ')}>
		 <div className="overlay"></div> 
		 	<button className="close">×</button>
			<p>Регистрация</p>
			<input type="email" placeholder="Введите ваш email" />
			<input type="text" placeholder="Введите ваше Имя" />
			<input type="password" placeholder="Введите ваш пароль"/>
			<button>Продолжить</button>
		</section>
 
		 
	)
}
export default Registration