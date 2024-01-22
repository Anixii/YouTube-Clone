import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { useEffect } from "react"
import Preloader from "../components/Preloader/Preloader"
import { getChannelDetails } from "../redux/detailsChannel-slice"
import s from '../styles/ChannelDetails.module.css'
import { formatNumber, timeAgo } from "../utils/customFuctions"
import VideoCard from "../components/Video/VideoCard"
import errorIconf from '../assets/image 1.svg' 
import SearchResult from "../components/FeedBack/SearchResult"
const ChannelDetails = () => {
    const {params} = useParams()
  const dispatch= useAppDispatch() 
  const {isFetch,defineChannel,channelVideos} = useAppSelector((state) => state.channel )
  useEffect(() =>{ 
    dispatch(getChannelDetails({id:params}))
  },[params]) 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  if(isFetch){ 
    return <Preloader/>
  }
if(defineChannel === null){ 
  return <SearchResult title="Произошла ошибка" img={errorIconf}/>
}
  return (
    <main className={s.channel}> 
      <div className={s.channel__container}>
        <div className={s.channel__banner} style={{backgroundImage:`url(${defineChannel?.brandingSettings?.image?.bannerExternalUrl})`}}> 
         
        </div>
        <div className={s.channel__info}>
          <div className={s.channel__avatar}><img src={defineChannel?.snippet.thumbnails?.medium?.url || defineChannel?.snippet.thumbnails?.high?.url || defineChannel?.snippet.thumbnails?.default?.url} alt="" /></div>
          <div className={s.channel__text}>
            <div className={s.channel__title}>{defineChannel?.snippet.title}</div>
            <div className={s.channel__subtitle}>{defineChannel?.snippet.customUrl} ‧ <span>{formatNumber(defineChannel?.statistics.subscriberCount)} подписчиков ‧ {defineChannel?.statistics.videoCount} видео </span></div>
            <div className={s.channel__subtitle}>{formatNumber(defineChannel?.statistics.viewCount)} просмотров ‧ <span>Канал создан {timeAgo(defineChannel?.snippet.publishedAt)}</span> </div>
            <div className={s.channel__subtitle}>{defineChannel?.snippet.description}</div>
          </div> 
        </div> 
        <div className={s.channel__divider}></div> 

      <div className={s.channel__video}> 
          {channelVideos.length !== 0 ? channelVideos.map((item,index) => <VideoCard link={item.id.channelId || item.id.videoId} key={index} item={item.snippet}></VideoCard>) : <div className="title">У пользователя нету видео</div>}
        </div>
      </div>  
    </main>
  )
}

export default ChannelDetails