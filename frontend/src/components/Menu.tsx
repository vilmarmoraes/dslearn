import Link from "next/link";
import styles from "../styles/menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>        
        <Link href="/">VsSolution</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/second">Aquivo</Link>
            </li>
          <li>Sobre</li>
        </ul>
      </nav>
    </div>
  );
}
