import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from './Navbar.module.css';

/* context */
import { Context } from "../../context/UserContext";

function Navbar(){
    const { authenticated, logout } = useContext(Context);
    return(
        <nav className={styles.navbar}>
           <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {authenticated ? (
                    <>

                    </>
                ) : (
                    <>
                    <li>
                        <Link to="/login">Entrar</Link>
                    </li>
                    <li>
                        <Link to="/register">Cadastrar</Link>
                    </li>
                    </>
                )}
            </ul> 
        </nav>
    )
}






export default Navbar