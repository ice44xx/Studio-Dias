import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';
import Link from 'next/link';

const extesion = [
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

const Extesion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src='assets/borb1.webp' alt='Penas' className={styles.img} />
        <p className={styles.title}>Extensão de Cilios</p>
        <img src='assets/borb2.webp' alt='Penas' className={styles.img} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_content_info}>
          <div className={styles.container_background}>
            <CarouselServices image={extesion} page={4} />
          </div>
          <div className={styles.container_info}>
            <div className={styles.line1}>
              <Link className={styles.link} href='https://www.instagram.com/lash_alinedias/' target='_blank'>
                <i className='fa-brands fa-instagram'></i>
                <p>@lash_alinedias</p>
              </Link>
            </div>
            <div className={styles.line2}>
              <p>Lembrete</p>
            </div>
            <div className={styles.line3}>
              <p>Independente do que estiver sentindo, levante-se, vista-se, faça os cílios e saia para brilhar!</p>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <img src='assets/hero-lash.webp' alt='Aline Dias' className={`${styles.img} ${styles.desktop}`} />
          <img src='assets/hero-lash-mobile.webp' alt='Aline Dias' className={`${styles.img} ${styles.mobile}`} />
        </div>
      </div>
    </div>
  );
};
export default Extesion;
