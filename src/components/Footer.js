import React from 'react';
import classes from "./Footer.module.css";
import Container from "./Container";
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"
const Footer = () => {
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
                                    <li><p className={classes.label}>Покупателям</p></li>
                                    <li><a href="">Политика конфиденциальности</a></li>
                                    <li><a href="">Договор оферты</a></li>
                                    <li><a href="">Доставка</a></li>
                                    <li><a href="">Возрат</a></li>
                                    <li><a href="">Поддержка</a></li>
                                </ul>
                                <ul className={classes.table}>
                                    <li><p className={classes.label}>ONETOONE</p></li>
                                    <li><a href="">О нас</a></li>
                                    <li><a href="">Реквизиты</a></li>
                                    <li><a href="">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className={classes.rights}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda blanditiis commodi culpa delectus dicta eius ex ipsum, magnam magni nam neque nulla praesentium quaerat quam sapiente sed veniam.</p>
                    </div>
                }
            />
        </div>
    );
};

export default Footer;