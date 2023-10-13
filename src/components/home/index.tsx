import RedesIcon from '@/common/redes';
import styles from './styles.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <RedesIcon />
      <div className={styles.container_logo} data-aos='zoom-in'>
        <img src='assets/logo.webp' alt='Studio Emily Dias' className={styles.logo} />
      </div>
      <div className={styles.btn} data-aos='zoom-in'>
        <Link className={styles.link} href={'http://api.whatsapp.com/send?1=pt_BR&phone=555191198818'} target='_blank'>
          <p className={styles.title}>Marque seu Horário</p>
        </Link>
      </div>
    </div>
  );
};
export default Home;
