import {FC, useState} from "react"
import classes from './HeaderLinks.module.css'
import {NavLink} from "react-router-dom"
export const HeaderLinks: FC = () => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <div className={classes.links}>
            {!isAuth
                ? <>
                    <NavLink activeClassName={classes.isActive} to='/register'>Регистрация / Вход</NavLink>
                </>
                : <>
                    <NavLink activeClassName={classes.isActive} to='/logout'>Выход</NavLink>
                    <NavLink activeClassName={classes.isActive} to='/profile'>username</NavLink>
                </>
            }
        </div>

    )
}