import {FC} from "react";
import {HeaderLinks} from "./HeaderLinks";
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

export const Header: FC = () => {

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <div>
                    <NavLink to='/news'><span>ЧР</span></NavLink>
                </div>
                <p>Чё расскажешь?</p>
            </div>
            <HeaderLinks/>
        </div>
    )
}