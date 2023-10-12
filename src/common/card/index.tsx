import styles from './styles.module.scss';
interface Props {
  name: string;
  description: string;
  url: string;
}
const Card: React.FC<Props> = ({ name, description, url }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={name} />
      <div className={styles.overlay}>
        <p className={styles.title}>{name}</p>
        <p className={styles.desc}>{description}</p>
        <button className={styles.btn}>
          <a href='https://www.instagram.com/studioemilydias_/?igshid=YmMyMTA2M2Y%3D' target='_blank'>
            @studioemilydias_
          </a>
        </button>
      </div>
    </div>
  );
};
export default Card;
