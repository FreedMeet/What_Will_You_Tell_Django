import {FC} from "react"
import classes from './HeaderLinks.module.css'
import {NavLink} from "react-router-dom";

export const HeaderLinks: FC = () => {
    return (
        <div className={classes.links}>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
            <NavLink to='/login'>Войти</NavLink>
            <NavLink to='/register'>Регистрация</NavLink>
        </div>

    )
}