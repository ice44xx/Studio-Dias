import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';

const lash = [
  {
    url: 'work/lash/1.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/2.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/3.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/4.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/5.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/6.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/7.png',
    name: 'Lash Lifting'
  },
  {
    url: 'work/lash/8.png',
    name: 'Lash Lifting'
  }
];

const Lash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/pen1.png' alt='Penas' className={styles.img} />
        <p>Lash Lifting</p>
        <img src='assets/pen2.png' alt='Penas' className={styles.img} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_background}>
          <img src='assets/line.png' alt='Coração' className={styles.line} />
          <CarouselServices image={lash} />
        </div>
      </div>
    </div>
  );
};
export default Lash;
