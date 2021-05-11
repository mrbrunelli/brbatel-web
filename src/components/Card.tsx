import styles from "../styles/components/Card.module.css";

type Props = {
  title: string;
  description: string
  imgSrc: string
}

const Card = ({ title, description, imgSrc }: Props) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} title={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;