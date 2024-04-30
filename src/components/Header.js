import Container from "./Container";
import classes from "./Header.module.sass";
import {Link} from "react-router-dom";
import { ReactComponent as Basket } from "../images/icon-basket.svg"
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"
import Order from "./Order";
import {useDispatch, useSelector} from "react-redux";
import {setIsRUS, setModalOrder} from "../redux/ItemsSlice";
import Button from "./Button";

const Header = ({isFixed=false,input, setInput, isSearch= false,}) => {
    const dispatch = useDispatch()
    const {isRUS} = useSelector(state => state.itemsReducer)
        return (
            <>
                <Order/>
                <div className={`${isFixed?"header_fixed":"header"}`}>
                    <Container
                        inner={
                            <div className={classes.innerHeader}>
                                <Link to="/"><Logo className={classes.logo}/></Link>
                                <div className={classes.right}>
                                    <ul className={classes.links}>
                                        <li><Button size={"fit"} onclick={() => dispatch(setIsRUS(!isRUS))}
                                                    inner={isRUS ? "RUS" : "ENG"}/></li>
                                        <li><a className={classes.link}><Instagram className={classes.instagram}/></a>
                                        </li>
                                        <li><a className={classes.link}><Telegram className={classes.telegram}/></a>
                                        </li>
                                    </ul>
                                    {isSearch ? <input placeholder={isRUS?"искать":"search"} type="text"
                                                       onChange={event => setInput(event.target.value)}
                                                       className={classes.search}/> : ""}
                                    <button onClick={() =>dispatch(setModalOrder(true))} className={classes.order}><Basket
                                        className={classes.basket}/></button>
                                </div>
                            </div>
                        }
                    />
                </div>
            </>
        );
};

export default Header;