import CarouselService from '@/common/carouselDesign';
import styles from './styles.module.scss';

const Design = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/flor.png' alt='Flor' className={styles.img} />
        <p className={styles.title}>Design de Sobrancelhas</p>
        <img src='assets/flor.png' alt='Flor' className={styles.img} />
      </div>
      <div className={styles.container_splide}>
        <CarouselService />
      </div>
    </div>
  );
};
export default Design;
