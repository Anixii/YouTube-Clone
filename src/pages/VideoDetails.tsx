import { useEffect } from "react"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { getVideoByID } from "../redux/DetailsVideo-Slice"
import Preloader from "../components/Preloader/Preloader"

const VideoDetails = () => { 
  const {params} = useParams()
  const dispatch= useAppDispatch() 
  const {isFetch} = useAppSelector((state) => state.video )
  useEffect(() =>{ 
    dispatch(getVideoByID({id:params}))
  },[params]) 
  useEffect(() => {
    // Прокрутить страницу вверх при загрузке
    window.scrollTo(0, 0);
  }, []); 
  if(isFetch){ 
    return <Preloader/>
  }
  return (
    <VideoPlayer/>
  )
}

export default VideoDetails