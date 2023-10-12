import styles from './styles.module.scss';
const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Feedback</p>
        <img src='assets/star.png' alt='Estrelas' className={styles.img} />
      </div>
      <p className={styles.desc}>Quadros de recados de nossos queridos clientes!</p>
    </div>
  );
};
export default Feedback;
