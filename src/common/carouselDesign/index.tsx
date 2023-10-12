import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardService from '../cardService';

const img = [
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes.png',
    afterImg: 'befores/depois.png',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes1.png',
    afterImg: 'befores/depois1.png',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes2.png',
    afterImg: 'befores/depois2.png',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes3.png',
    afterImg: 'befores/depois3.png',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes4.png',
    afterImg: 'befores/depois4.png',
    alt: 'Design de sobrancelhas'
  },
  {
    name: 'Design de sobrancelhas',
    beforeImg: 'befores/antes5.png',
    afterImg: 'befores/depois5.png',
    alt: 'Design de sobrancelhas'
  }
];

const CarouselDesign = () => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: 4,
        perMove: 1
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
