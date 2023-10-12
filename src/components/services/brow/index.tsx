import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';

const extesion = [
  {
    url: 'work/brow/1.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/brow/2.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/brow/2.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/brow/2.webp',
    name: 'Lash Lifting'
  }
];

const Brow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/n1.webp' alt='Penas' className={styles.img} />
        <p className={styles.title}>Brow Lamination</p>
        <img src='assets/n2.webp' alt='Penas' className={styles.img} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_background}>
          <CarouselServices image={extesion} page={4} />
        </div>
      </div>
    </div>
  );
};
export default Brow;
