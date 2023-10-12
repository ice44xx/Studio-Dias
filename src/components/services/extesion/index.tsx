import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';

const extesion = [
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

const Extesion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/borb1.png' alt='Borboleta' className={styles.img} />
        <p>Extensão de Cílios</p>
        <img src='assets/borb2.png' alt='Borboleta' className={styles.img} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_splide}>
          <CarouselServices image={extesion} />
        </div>
        <div className={styles.hero}>
          <img src='assets/hero-lash.png' alt='Lash_alinedias' className={styles.hero_desk} />
          <img src='assets/hero-lash-mobile.png' alt='Lash_alinedias' className={styles.hero_mobile} />
        </div>
      </div>
    </div>
  );
};
export default Extesion;
