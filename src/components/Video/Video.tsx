import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getVideoByCatrgories } from '../../redux/slice'
import s from './Video.module.css'
import VideoCard from './VideoCard'
import Preloader from '../Preloader/Preloader'
const Video = () => {
    const dispatch = useAppDispatch() 
    const {dataItems,currentCategory,isFetch} = useAppSelector((state) => state.slice)
    useEffect(() =>{ 
        if(dataItems === null){  
            dispatch(getVideoByCatrgories({q:currentCategory})) 
        }
    },[]) 
    if(isFetch){ 
        return <Preloader/>
    }
  return (
    <>  
        <main className={s.video}>
            <div className={s.video__container}> 
                {dataItems?.items?.map((item,index) => <VideoCard key={index} item={item.snippet}/>)}
            </div>
        </main>
    </>
  )
}

export default Video