import styles from './styles.module.scss';
const Footer = () => {
  return (
    <div className={styles.container}>
      <a href='/privacy.html'>Privacy Policy</a> - 2022 | Prod por{' '}
      <a href=' http://api.whatsapp.com/send?1=pt_BR&phone=5551985981382' target='_blank'>
        NSHCODE <i className='fa-regular fa-heart'></i>
      </a>
    </div>
  );
};
export default Footer;
