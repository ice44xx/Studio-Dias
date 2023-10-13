import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';
import Link from 'next/link';

const extesion = [
  {
    url: 'work/ext/1.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/2.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/3.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/4.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/5.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/6.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/7.webp',
    name: 'Extensão de Cilios'
  },
  {
    url: 'work/ext/8.webp',
    name: 'Extensão de Cilios'
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
            <div className={styles.line1} data-aos='fade-left'>
              <Link className={styles.link} href='https://www.instagram.com/lash_alinedias/' target='_blank'>
                <i className='fa-brands fa-instagram'></i>
                <p>@lash_alinedias</p>
              </Link>
            </div>
            <div className={styles.line2} data-aos='fade-right'>
              <p>Lembrete</p>
            </div>
            <div className={styles.line3} data-aos='fade-left'>
              <p>Independente do que estiver sentindo, levante-se, vista-se, faça os cílios e saia para brilhar!</p>
            </div>
          </div>
        </div>
        <div className={styles.hero} data-aos='fade-left'>
          <img src='assets/hero-lash.webp' alt='Aline Dias' className={`${styles.img} ${styles.desktop}`} />
          <img src='assets/hero-lash-mobile.webp' alt='Aline Dias' className={`${styles.img} ${styles.mobile}`} />
        </div>
      </div>
    </div>
  );
};
export default Extesion;
