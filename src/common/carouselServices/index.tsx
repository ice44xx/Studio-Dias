import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardServices from '../cardServices';

const breakpoints = {
  800: {
    perPage: 3
  },
  380: {
    perPage: 2
  }
};
const CarouselService: React.FC<{ page: number; image: { name: string; url: string }[] }> = ({ image, page }) => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: page,
        perMove: 1,
        gap: 10,
        breakpoints
      }}
    >
      {image.map((item, index) => (
        <SplideSlide key={index} className={styles.splide}>
          <CardServices name={item.name} url={item.url} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default CarouselService;
