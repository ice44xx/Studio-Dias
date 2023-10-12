import RedesIcon from '@/common/redes';
import styles from './styles.module.scss';
const Home = () => {
  return (
    <div className={styles.container}>
      <RedesIcon />
      <img src='assets/logo.png' alt='Studio Emily Dias' className={styles.logo} />
      <button className='btn'>Venha nos conhecer</button>
    </div>
  );
};
export default Home;
