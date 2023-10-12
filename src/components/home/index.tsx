import RedesIcon from '@/common/redes';
import styles from './styles.module.scss';
const Home = () => {
  return (
    <div className={styles.container}>
      <RedesIcon />
      <div className={styles.container_logo}>
        <img src='assets/logo.webp' alt='Studio Emily Dias' className={styles.logo} />
      </div>
      <div className={styles.btn}>
        <p className={styles.title}>Marque seu Horário</p>
      </div>
    </div>
  );
};
export default Home;
