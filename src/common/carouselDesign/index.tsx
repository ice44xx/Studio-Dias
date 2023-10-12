import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardService from '../cardService';

const img = [
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes.webp',
    afterImg: 'befores/depois.webp',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes1.webp',
    afterImg: 'befores/depois1.webp',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes2.webp',
    afterImg: 'befores/depois2.webp',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes3.webp',
    afterImg: 'befores/depois3.webp',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes4.webp',
    afterImg: 'befores/depois4.webp',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes5.webp',
    afterImg: 'befores/depois5.webp',
    alt: 'Design de sobrancelhas'
  }
];
const breakpoints = {
  890: {
    perPage: 3
  },
  480: {
    perPage: 2
  },
  380: {
    perPage: 1
  }
};

const CarouselDesign = () => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: 4,
        perMove: 1,
        breakpoints
      }}
    >
      {img.map((service, index) => (
        <SplideSlide key={index} className={styles.splide}>
          <CardService name={service.alt} beforeImg={service.beforeImg} afterImg={service.afterImg} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default CarouselDesign;
