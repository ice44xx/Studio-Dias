import Link from 'next/link';
import styles from './styles.module.scss';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <ul>
          <Link className={styles.link} href={'/'}>
            <li>Home</li>
          </Link>
          <Link className={styles.link} href={'/'}>
            <li>Sobre</li>
          </Link>
          <Link className={styles.link} href={'/'}>
            <li>Serviços</li>
          </Link>
          <Link className={styles.link} href={'/'}>
            <li>Contato</li>
          </Link>
        </ul>
      </div>
      <div className={styles.mobile}>
        <p>X</p>
      </div>
    </div>
  );
};
export default Navbar;
