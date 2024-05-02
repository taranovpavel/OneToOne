import Container from "./Container";
import Order from "./Order";
import Button from "./Button";
import { ReactComponent as Basket } from "../images/icon-basket.svg"
import { ReactComponent as Telegram } from "../images/icon-telegram.svg"
import { ReactComponent as Instagram} from "../images/icon-instagram.svg"
import { ReactComponent as Logo} from "../images/icon-logo.svg"
import classes from "./Header.module.sass";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsRUS, setModalOrder} from "../redux/ItemsSlice";

const Header = ({isFixed=false,setInput, isSearch= false,}) => {
    const {isRUS} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const inputFunction = (event) =>{
        window.scrollTo(0, 0)
        setInput(event.target.value)
    }
    return (
        <>
            <Order/>
            <div className={`${isFixed?"header__fixed":"header"}`}>
                <Container
                    inner={
                        <div className={classes.header__inner}>
                            <Link to="/"><Logo className={classes.logo}/></Link>
                            <div className={classes.header__inner__right}>
                                <ul className={classes.header__inner__right__links}>
                                    <li><Button size={"fit"} onclick={() => dispatch(setIsRUS())} inner={isRUS ? "RUS" : "ENG"}/></li>
                                    <li><a href={""} className={classes.header__inner__right__links__link}><Instagram className={classes.instagram}/></a></li>
                                    <li><a href={""} className={classes.header__inner__right__links__link}><Telegram className={classes.telegram}/></a></li>
                                </ul>
                                {isSearch ? <input placeholder={isRUS?"искать":"search"} type="text" onChange={(event) => inputFunction(event)} className={classes.header__inner__right__search}/> : ""}
                                <button onClick={() =>dispatch(setModalOrder(true))} className={classes.header__inner__right__order}><Basket/></button>
                            </div>
                        </div>
                    }
                />
            </div>
        </>
    );
};

export default Header;