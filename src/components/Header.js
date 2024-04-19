import React from 'react';
import Container from "./Container";
import classes from "./Header.module.css";
import { ReactComponent as Basket } from "../images/icon-basket.svg"
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as TikTok } from "../images/icon-tiktok.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"

const Header = () => {
        return (
            <div className={classes.header}>
                <Container
                    inner={
                        <div className={classes.innerHeader}>
                            <p>LOGO</p>
                            <div className={classes.pages}>
                                <p>Одежда</p>
                                <p>Бренды</p>
                                <p>Обувь</p>
                                <p>Аксессуары</p>
                                <p>Скидки</p>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.links}>
                                    <a className={classes.link}><TikTok className={classes.tiktok}/></a>
                                    <a className={classes.link}><Instagram className={classes.instagram}/></a>
                                    <a className={classes.link}><Telegram className={classes.telegram}/></a>
                                </div>
                                <input placeholder="искать" type="text" className={classes.search}/>
                                <Basket/>
                            </div>
                        </div>
                    }
                />
        </div>
        );
};

export default Header;