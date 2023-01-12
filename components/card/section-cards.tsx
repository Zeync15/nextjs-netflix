import Card from "./card";
import styles from './section-cards.module.css';
import { VideosProps } from "../../pages";

export interface SectionCardsProps {
  title: string;
  videos?: VideosProps[];
  size: string;
}

const SectionCards = ({ title, videos = [], size }: SectionCardsProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardWrapper}>
        {videos.map((video, index) => (
          <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
        ))}
      </div>
    </section>
  );
};

export default SectionCards;