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
                    <div className={classes.innerFooter}>
                        <div className={classes.footerTop}>
                            <Logo className={classes.logo}/>
                            <div className={classes.footerLinks}>
                                <ul className={classes.innerFooterLinks}>
                                    <li><a href=""><Instagram className={classes.instagram}/></a></li>
                                    <li><a href=""><Telegram className={classes.telegram}/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.line}/>
                        <div className={classes.bottom}>
                            <div className={classes.tables}>
                                <ul className={classes.table}>
                                    <li><p className={classes.label}>ONETOONE</p></li>
                                    <li><Link to={"/Privacy"}>{isRUS?"Политика конфиденциальности":"Privacy policy"}</Link></li>
                                    <li><Link to={"/Contract"}>{isRUS?"Договор оферты":"Offer contract"}</Link></li>
                                    <li><a href="">{isRUS?"Поддержка":"Support"}</a></li>
                                    <li><a href="">{isRUS?"Контакты":"Contacts"}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Footer;