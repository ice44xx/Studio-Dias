import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';

const lash = [
  {
    url: 'work/lash/1.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/2.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/3.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/4.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/5.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/6.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/7.webp',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/8.webp',
    name: 'Lash Lifting'
  }
];

const Lash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/pen1.webp' alt='Penas' className={styles.img} />
        <p className={styles.title}>Lash Lifting</p>
        <img src='assets/pen2.webp' alt='Penas' className={styles.img} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_background}>
          <img src='assets/line.webp' alt='Coração' className={styles.line} />
          <CarouselServices image={lash} page={4} />
        </div>
      </div>
    </div>
  );
};
export default Lash;
