import Link from 'next/link';
import styles from './styles.module.scss';
interface Props {
  name: string;
  description: string;
  url: string;
}
const Card: React.FC<Props> = ({ name, description, url }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={name} className={styles.img} />
      <div className={styles.overlay}>
        <p className={styles.title}>{name}</p>
        <p className={styles.desc}>{description}</p>
        <button className={styles.btn}>
          <Link className={styles.link} href='https://www.instagram.com/studioemilydias_/?igshid=YmMyMTA2M2Y%3D' target='_blank'>
            @studioemilydias_
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Card;
