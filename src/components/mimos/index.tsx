import styles from './styles.module.scss';
const Mimos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Mimos</p>
        <img src='assets/heart.webp' alt='Coração' className={styles.heart} />
      </div>
      <div className={styles.container_content}>
        <img src='assets/mimos.webp' alt='mimos Studio Emily Dias' />
      </div>
    </div>
  );
};
export default Mimos;
