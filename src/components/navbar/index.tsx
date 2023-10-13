import Link from 'next/link';
import styles from './styles.module.scss';
import Button from '@/common/button';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} data-aos='fade-down'>
      <div className={styles.desktop}>
        <ul>
          <Link className={styles.link} href={'#home'}>
            <li>Home</li>
          </Link>
          <Link className={styles.link} href={'#about'}>
            <li>Sobre</li>
          </Link>
          <Link className={styles.link} href={'#services'}>
            <li>Serviços</li>
          </Link>
          <Link className={styles.link} href={'#contact'}>
            <li>Contato</li>
          </Link>
        </ul>
      </div>
      <div className={styles.mobile} onClick={navbarOpen}>
        <Button click={navbarOpen} />
      </div>
      <div className={`${styles.mobile_wall} ${isOpen ? styles.mobile_wall : styles.close}`}>
        <ul>
          <img src='/assets/logo-min.webp' alt='Studio Emily Dias' className={styles.logo} />
          <Link className={styles.link} href={'#home'}>
            <li>Home</li>
          </Link>
          <Link className={styles.link} href={'#about'}>
            <li>Sobre</li>
          </Link>
          <Link className={styles.link} href={'#services'}>
            <li>Serviços</li>
          </Link>
          <Link className={styles.link} href={'#contact'}>
            <li>Contato</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
