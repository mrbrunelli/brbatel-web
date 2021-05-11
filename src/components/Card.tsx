import styles from "../styles/components/Card.module.css";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string
  imgSrc: string
}

const Card = ({ id, title, description, imgSrc }: Props) => {
  return (
    <Link href="/company/[id]" as={`/company/${id}`}>
      <div className={styles.card}>
        <img src={imgSrc} alt={title} title={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Card;