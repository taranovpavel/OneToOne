import React from 'react';
import classes from "./Footer.module.sass";
import Container from "./Container";
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Footer = () => {
    const {isRUS} = useSelector(state => state.itemsReducer)
    return (
        <div className={classes.footer}>
            <Container
                inner={
                    <div className={classes.footer__inner}>
                        <div className={classes.footer__inner__top}>
                            <Logo className={classes.logo}/>
                            <ul className={classes.footer__inner__top__links}>
                                <li><a href=""><Instagram className={classes.instagram}/></a></li>
                                <li><a href=""><Telegram className={classes.telegram}/></a></li>
                            </ul>
                        </div>
                        <div className={classes.footer__inner__line}/>
                        <div className={classes.footer__inner__bottom}>
                            <ul className={classes.footer__inner__bottom__table}>
                                <li><p className={classes.footer__inner__bottom__table__label}>ONETOONE</p></li>
                                <li><Link to={"/Privacy"}>{isRUS?"Политика конфиденциальности":"Privacy policy"}</Link></li>
                                <li><Link to={"/Contract"}>{isRUS?"Договор оферты":"Offer contract"}</Link></li>
                                <li><a href="https://t.me/onet00ne">{isRUS?"Поддержка":"Support"}</a></li>
                                <li><a href="https://t.me/onet00ne">{isRUS?"Контакты":"Contacts"}</a></li>
                            </ul>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Footer;