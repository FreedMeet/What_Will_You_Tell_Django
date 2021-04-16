import {FC} from "react";
import classes from './LogoutPage.module.css'

export const LogoutPage: FC = () => {
    return(
        <div className={classes.logoutPage}>
            <h1>Выход</h1>
            <p>Вы точно хотите выйти?</p>
            <button className={classes.logbtn}>Выход</button>
        </div>
    )
}