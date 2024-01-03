import { useEffect } from "react"
import VideoPlayer from "../components/VideoPlayer/VideoPlayer"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../redux/store"
import { getVideoByID } from "../redux/DetailsVideo-Slice"

const VideoDetails = () => { 
  const {params} = useParams()
  const dispatch= useAppDispatch() 
  
  useEffect(() =>{ 
    dispatch(getVideoByID({id:params}))
  },[params])
  return (
    <VideoPlayer/>
  )
}

export default VideoDetails