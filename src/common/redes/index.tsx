import Link from 'next/link';
import styles from './styles.module.scss';

const RedesIcon = () => {
  return (
    <div className={styles.redes} data-aos='fade-left'>
      <div className={styles.icon}>
        <Link className={styles.link} href='https://www.instagram.com/studioemilydias_/?igshid=YmMyMTA2M2Y%3D' target='_blank'>
          <i className='fab fa-instagram' />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link className={styles.link} href='http://api.whatsapp.com/send?1=pt_BR&phone=555191198818' target='_blank'>
          <i className='fa-brands fa-whatsapp' />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link className={styles.link} href='https://www.facebook.com/Studio-Emily-Dias-102746459174233' target='_blank'>
          <i className='fab fa-facebook-f' />
        </Link>
      </div>
    </div>
  );
};
export default RedesIcon;
