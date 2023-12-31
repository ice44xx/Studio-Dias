import styles from './styles.module.scss';

interface Props {
  title: string;
  desc: string;
  url: string;
}

const FeedbackCard: React.FC<Props> = ({ title, desc, url }) => {
  const stars = Array(5).fill(null);
  return (
    <div className={styles.card}>
      <div className={styles.img_box}>
        <img src={url} alt={title} />
      </div>
      <div className={styles.container_content}>
        <div className={styles.star}>
          {stars.map((_, index) => (
            <i key={index} className='fa-solid fa-star'></i>
          ))}
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};
export default FeedbackCard;
