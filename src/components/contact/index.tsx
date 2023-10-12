import styles from './styles.module.scss';
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Redes Sociais</p>
      </div>
      <div className={styles.container_content}>
        <div className={styles.redes_sociais}>
          <a href='https://www.facebook.com/Studio-Emily-Dias-102746459174233' target='_blank'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.instagram.com/studioemilydias_/?igshid=YmMyMTA2M2Y%3D' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href=' http://api.whatsapp.com/send?1=pt_BR&phone=555191198818' target='_blank'>
            <i className='fa-brands fa-whatsapp'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
