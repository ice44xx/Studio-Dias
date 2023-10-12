import { useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  name: string;
  beforeImg: string;
  afterImg: string;
}

const CardService: React.FC<Props> = ({ name, beforeImg, afterImg }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <div className={styles.circle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <img src='/assets/circle.webp' className={styles.circle_img} />
          <div className={styles.container_img}>
            <p className={styles.after}>Click aqui!</p>
            <img src={isHover ? afterImg : beforeImg} alt={name} className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardService;
