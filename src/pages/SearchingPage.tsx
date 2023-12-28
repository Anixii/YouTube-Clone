import  { useEffect } from 'react'
import SearchedVideoList from '../components/SearchedVideoList/SearchedVideoList'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { getVideoBySearch } from '../redux/search-Slice'
import Preloader from '../components/Preloader/Preloader'

const SearchingPage = () => { 
    const {params} = useParams() 
    const dispatch = useAppDispatch() 
    const {isFetch,dataItems} = useAppSelector((state) => state.search)
    useEffect(() =>{ 
        dispatch(getVideoBySearch({q:params}))
    },[params])
    if(isFetch) { 
        return <Preloader/>
    }
  return (
    <> 
        <SearchedVideoList items={dataItems?.items}/>
    </>
    )
}

export default SearchingPage