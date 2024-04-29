import Image from "next/image";
import logo from "../../assets/logo.png";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.banner}>
        AI Calling Agent - <span>Learn more</span>
      </div>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
          <p>PG-AGI</p>
        </div>
        <div className={styles.links}>
          <a>What we do</a>
          <a>What we think</a>
          <a>Who we are</a>
        </div>
        <button className={styles.contact}>Contact us</button>
      </div>
    </nav>
  );
}
