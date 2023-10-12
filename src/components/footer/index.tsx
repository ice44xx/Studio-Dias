import Link from 'next/link';
import styles from './styles.module.scss';
const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        <Link className={styles.link} href='/privacy.html'>
          Privacy Policy
        </Link>
        - 2022 | Prod por{' '}
        <Link className={styles.link} href={'https://nshcode.vercel.app/'} target='_blank'>
          NSHCODE <i className='fa-regular fa-heart'></i>
        </Link>{' '}
      </p>
    </div>
  );
};
export default Footer;
