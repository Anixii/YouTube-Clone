import s from './SearchedVideoList.module.css' 
import { Item } from '../../types/types'
import SearchCard from './SearchCard'
type SearchedVideoListType = { 
  items: Item[] | undefined
}
const SearchedVideoList = ({items}:SearchedVideoListType) => { 
  return (
    <div className={s.video__list}>
        <div className={s.video__list_container}>
            {items?.map((item,index) => <SearchCard key={index} link={item.id.channelId || item.id.videoId} isChannel={item.id.channelId && true} item={item.snippet}/> )}
        </div>
    </div>
  )
}

export default SearchedVideoList