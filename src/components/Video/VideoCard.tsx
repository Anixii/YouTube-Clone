import s from './Video.module.css' 
import { Snippet } from '../../types/types'
import { timeAgo } from '../../utils/customFuctions'
type VideoCardType=  { 
    item: Snippet | Snippet
}
const VideoCard = ({item}:VideoCardType) => { 
    console.log(item);
    
  return (
    <> 
        <div className={s.video__card}> 
            <div className={s.video__card_img}> 
                <img src={item.thumbnails?.medium.url || item.thumbnails?.high.url || item.thumbnails?.default.url} alt="Video Preview" />
            </div> 
            <div className={s.video__card_info}>
                <div className={s.video__card_desc}>{item.title}</div>
                <div className={s.video__card_title}>{item.channelTitle}</div>
                <div className={s.video__card_date}>{timeAgo(item.publishedAt || item.publishTime)}</div>
            </div> 
        </div>
    </>
    )
}

export default VideoCard