import classes from './RegisterPage.module.css'

export const RegisterPage = () => {
    return <div>
        <div className={classes.loginForm}>
            <h1>Регистрация / Вход</h1>
            <div className={classes.txtb}>
                <input type="text" />
                <span data-placeholder="email"/>
            </div>
            <div className={classes.txtb}>
                <input type="password" />
                <span data-placeholder="Пароль"/>
            </div>
            <button className={classes.logbtn}>Регистрация</button>
            <button className={classes.logbtn}>Войти</button>
        </div>
    </div>
}