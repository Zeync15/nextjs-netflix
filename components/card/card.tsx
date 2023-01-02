import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./card.module.css";

export interface CardProps {
  imgUrl?: string;
  size?: string;
}

export interface ClassMapProps {
  large: string;
  medium: string;
  small: string;
}

const Card = ({
  imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
  size = "medium",
}: CardProps) => {
  const classMap: ClassMapProps = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnImgError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size as keyof ClassMapProps]}>
        <Image
          src={imgSrc}
          alt="Picture of movie"
          fill
          onError={handleOnImgError}
          className={styles.cardImg}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
    </div>
  );
};
export default Card;
