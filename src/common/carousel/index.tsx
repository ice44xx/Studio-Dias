import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '../card';

const services = [
  {
    name: 'Design Sobrancelhas',
    desc: 'Nosso design é personalizado conforme a estrutura óssea do seu rosto trazendo naturalidade e harmonia.',
    url: 'work/serv/1.png'
  },
  {
    name: 'Lash Lifting',
    desc: 'É um procedimento químico realizado no seu cílios, dando um efeito de fios mais longos, Com durabilidade de 60 a 90 dias sem precisar de manutenção e cuidados diários.',
    url: 'work/serv/2.png'
  },
  {
    name: 'Extensão Cílios',
    desc: 'Nossa extensão é feita com fios sintéticos de ótima qualidade, alongando e dando volume aos fios. E dando liberdade de não precisar usar máscara de cílios e estar com seu olhar sempre realçado.',
    url: 'work/serv/3.png'
  },
  {
    name: 'Brow Lamination',
    desc: 'É um procedimento químico, que dá impressão de sobrancelhas mais volumosas.  ótimo para quem tem pelinhos ralos e com falhas além disso tem durabilidade de 30 a 60 dias.',
    url: 'work/serv/4.png'
  }
];

const Carousel = () => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: 4,
        perMove: 1
      }}
    >
      {services.map((service, index) => (
        <SplideSlide key={index} className={styles.splide}>
          <Card name={service.name} description={service.desc} url={service.url} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default Carousel;
