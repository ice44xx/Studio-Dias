import styles from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FeedbackCard from '../cardFeedback';

const profiles = [
  {
    url: 'work/review/1.png',
    name: 'Silvia',
    desc: 'Ambiente climatizado! com um astral maravilhoso! Duas profissionais nota 10, atenciosas , responsáveis e são altamente qualificadas, super indico!'
  },
  {
    url: 'work/review/2.png',
    name: 'Milene',
    desc: 'Oii, só pra dizer que eu amei o seu trabalho e já recebi muitos elogios do cílios 🥰'
  },
  {
    url: 'work/review/3.png',
    name: 'Juliana',
    desc: 'Loira, obriada pelo seu atendimento maravilhoso, tu é uma ótima profissional e muito querida, eu amei 😍'
  },
  {
    url: 'work/review/4.png',
    name: 'Rita',
    desc: 'Atendimento personalizado, ambiente aconchegante, resultados impecáveis e o cafezinho... uma delicia! Super recomendo!!!'
  },
  {
    url: 'work/review/5.png',
    name: 'Eduarda',
    desc: 'As meninas são profissionais extremamente qualificadas e ajudam muito na autoestima das suas clientes fazendo um lindo trabalho!'
  }
];
const breakpoints = {
  1050: {
    perPage: 3
  },
  700: {
    perPage: 2
  },
  450: {
    perPage: 1
  }
};
const CarouselFeedback = () => {
  return (
    <Splide
      options={{
        type: 'slide',
        perPage: 4,
        perMove: 1,
        breakpoints
      }}
    >
      {profiles.map((profile, index) => (
        <SplideSlide key={index} className={styles.splide}>
          <FeedbackCard title={profile.name} desc={profile.desc} url={profile.url} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default CarouselFeedback;
