import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useConsumeAuth } from "../../../context/UserContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { logout } = useConsumeAuth();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/send">Envio simples</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>

      <FaArrowRight onClick={logout} size={24} color="#FFF" />
    </nav>
  );
}

export default Navbar;
