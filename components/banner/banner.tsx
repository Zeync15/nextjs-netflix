import { Roboto_Slab } from "@next/font/google";
import Image from "next/image";
import styles from "./banner.module.css";

export interface BannerProps {
  title: string;
  subTitle: string;
  imgUrl: string;
}

const roboto_slab_700 = Roboto_Slab({ weight: "700", subsets: ["latin"] });
const playIcon = "/static/play_arrow.svg";

const handleOnPlay = () => {
  console.log("handleOnPlay");
};

const Banner = ({ title, subTitle, imgUrl }: BannerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>

          <div className={roboto_slab_700.className}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subTitle}>{subTitle}</h3>
          </div>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image src={playIcon} alt="Play button icon" width={32} height={32} />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};
export default Banner;
