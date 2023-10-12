import styles from './styles.module.scss';
interface Props {
  name: string;
  url: string;
}
const CardServices: React.FC<Props> = ({ name, url }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={name} />
    </div>
  );
};
export default CardServices;
