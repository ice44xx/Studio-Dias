import styles from './styles.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_hero}>
        <img src='assets/logo-min.webp' alt='Studio Emily Dias' className={styles.icon} />
        <p className={styles.title}>Studio Emily Dias</p>
        <p className={styles.desc}>
          Me chamo Emily Dias Nery aos meus 17 anos fiz meu primeiro curso de designer de sobrancelhas, desde então vim me aperfeiçoando. Inaugurei
          meu Studio, fazendo somente designer de sobrancelhas hoje em dia temos diversos procedimentos, todos feitos com excelência realçando sua
          beleza natural.
        </p>
      </div>
      <div className={styles.hero}>
        <img src='assets/hero-about.webp' alt='Studio Emily Dias' />
      </div>
    </div>
  );
};
export default About;
