import RedesIcon from '@/common/redes';
import styles from './styles.module.scss';
const Home = () => {
  return (
    <div className={styles.container}>
      <RedesIcon />
      <img src='assets/logo.png' alt='Studio Emily Dias' className={styles.logo} />
      <div className={styles.btn}>
        <p className={styles.title}>Marque seu Horário</p>
      </div>
    </div>
  );
};
export default Home;
