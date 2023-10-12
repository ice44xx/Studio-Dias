import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardServices from '../cardServices';

const CarouselService: React.FC<{ page: number; image: { name: string; url: string }[] }> = ({ image, page }) => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: page,
        perMove: 1
      }}
    >
      {image.map((item, index) => (
        <SplideSlide key={index}>
          <CardServices name={item.name} url={item.url} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default CarouselService;
