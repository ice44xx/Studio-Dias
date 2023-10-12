import CarouselServices from '@/common/carouselServices';
import styles from './styles.module.scss';
import Link from 'next/link';

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
        <img src='assets/borb1.png' alt='Penas' className={styles.img} />
        <p className={styles.title}>Extensão de Cilios</p>
        <img src='assets/borb2.png' alt='Penas' className={styles.img} />
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
          <img src='assets/hero-lash.png' alt='' className={styles.img} />
        </div>
      </div>
    </div>
  );
};
export default Extesion;
