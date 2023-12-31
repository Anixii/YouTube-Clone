import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { Snippet } from "../../types/types";
import ChannelCard from "./ChannelCard";
import s from "./SearchedVideoList.module.css";
import VideoCardSearch from "./VideoCard";
type SearchCardType = {
  item: Snippet;
  link: string | undefined;
  isChannel: any;
};
const SearchCard = ({ item, link, isChannel }: SearchCardType) => {
  const theme = useAppSelector((state) => state.slice.theme);  
  const nav = useNavigate() 
  const onHandleRedirect =()=>{ 
    if(isChannel){ 
      nav('/channel/' + link)
    } else{ 
      nav('/video/' + link)
    }
  }
  return (
    <div onClick={onHandleRedirect} className={s.card}>
      {isChannel ? (
        <ChannelCard theme={theme} item={item}/>
      ) : (
        <VideoCardSearch link={link} theme={theme} item={item}/>
      )}
    </div>
  );
};

export default SearchCard;
