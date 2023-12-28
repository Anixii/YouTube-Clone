import s from './SearchedVideoList.module.css' 
import { Snippet } from '../../types/types'
import { timeAgo } from '../../utils/customFuctions'
type ChannelCardtype={ 
    item: Snippet, 
    theme: string
}
const ChannelCard = ({item,theme}:ChannelCardtype) => {
  return (
    <> 
    <div className={s.channel__img}> 
    <img
        src={
          item.thumbnails.medium.url ||
          item.thumbnails.high.url ||
          item.thumbnails.default.url
        }
        alt="CHannel Video"
      />
    </div> 
    <div className={s.card__info_channel}>
      <div className={s.card__name}>
        {item.channelTitle}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={theme === "dark" ? " #aaaaaa" : "#7d7d7d"}
          height="14"
          viewBox="0 0 24 24"
          width="14"
          focusable="false"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
        </svg>
      </div>
      <div className={s.card__date}>
        Канал был создан: {timeAgo(item.publishTime || item.publishedAt)}
      </div>
      <div className={s.card__desc_channel}>{item.description}</div>
    </div>
  </>
  )
}

export default ChannelCard