import React, {useState} from 'react';
import Container from "./Container";
import classes from "./Header.module.css";
import { ReactComponent as Basket } from "../images/icon-basket.svg"
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"

const Header = ({input, setInput}) => {
        return (
            <div className={classes.header}>
                <Container
                    inner={
                        <div className={classes.innerHeader}>
                            <a href=""><Logo className={classes.logo}/></a>
                            <div className={classes.right}>
                                <ul className={classes.links}>
                                    <li><a className={classes.link}><Instagram className={classes.instagram}/></a></li>
                                    <li><a className={classes.link}><Telegram className={classes.telegram}/></a></li>
                                </ul>
                                <input placeholder="искать" type="text"  onChange={event => setInput(event.target.value)} className={classes.search}/>
                                <Basket/>
                            </div>
                        </div>
                    }
                />
        </div>
        );
};

export default Header;