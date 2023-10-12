import CarouselFeedback from '@/common/carouselFeedback';
import styles from './styles.module.scss';
const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Feedback</p>
        <img src='assets/star.webp' alt='Estrelas' className={styles.img} />
      </div>
      <p className={styles.desc}>Quadros de recados de nossos queridos clientes!</p>
      <div className={styles.container_splide}>
        <CarouselFeedback />
      </div>
    </div>
  );
};
export default Feedback;
