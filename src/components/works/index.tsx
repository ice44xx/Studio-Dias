import Carousel from '@/common/carousel';
import styles from './styles.module.scss';
const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.heading}>
          <img src='assets/esq.webp' alt='Borboleta' className='img-head' />
          <p className={styles.title}>Serviços</p>
          <img src='assets/dire.webp' alt='Borboleta' className='img-head' />
        </div>
        <div className={styles.container_splide}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
export default Work;
