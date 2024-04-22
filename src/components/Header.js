import React, {useState} from 'react';
import Container from "./Container";
import classes from "./Header.module.css";
import {Link} from "react-router-dom";
import { ReactComponent as Basket } from "../images/icon-basket.svg"
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"

const Header = ({input, setInput, isSearch= false}) => {
        return (
            <div className={classes.header}>
                <Container
                    inner={
                        <div className={classes.innerHeader}>
                            <Link to="/"><Logo className={classes.logo}/></Link>
                            <div className={classes.right}>
                                <ul className={classes.links}>
                                    <li><a className={classes.link}><Instagram className={classes.instagram}/></a></li>
                                    <li><a className={classes.link}><Telegram className={classes.telegram}/></a></li>
                                </ul>
                                {isSearch ? <input placeholder="искать" type="text" onChange={event => setInput(event.target.value)} className={classes.search}/>:""}
                                <div className={classes.link}><Basket className={classes.basket}/></div>
                            </div>
                        </div>
                    }
                />
        </div>
        );
};

export default Header;