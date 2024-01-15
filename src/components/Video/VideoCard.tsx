import s from "./Video.module.css";
import { Snippet } from "../../types/types";
import { timeAgo } from "../../utils/customFuctions";
import { Link } from "react-router-dom";
type VideoCardType = {
  item: Snippet | Snippet;
  link: string | undefined;
};
const VideoCard = ({ item, link }: VideoCardType) => {
  return (
    <>
      <Link to={`/video/${link}`} className={s.video__card}>
        <div className={s.video__card_img}>
          <img
            src={
              item.thumbnails?.medium.url ||
              item.thumbnails?.high.url ||
              item.thumbnails?.default.url
            }
            alt="Video Preview"
          />
        </div>
        <div className={s.video__card_info}>
          <div className={s.video__card_desc}>{item.title}</div>
          <div className={s.video__card_title}>{item.channelTitle}</div>
          <div className={s.video__card_date}>
            {timeAgo(item.publishedAt || item.publishTime)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
