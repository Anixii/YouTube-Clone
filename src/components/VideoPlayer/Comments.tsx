import { AiOutlineLike } from 'react-icons/ai';
import { useAppSelector } from '../../redux/store'
import { timeAgo } from '../../utils/customFuctions';
import s from './Comments.module.css'
const Comments = () => { 
  const {comments}= useAppSelector(state => state.video)
  console.log(comments);
  
  return (
    <section className={s.comments}> 
      {comments?.map((item,index) => <div key={index} className={s.comments__item}> 
        <div className={s.comments__img}> 
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        </div>
        <div className={s.comment__info}>
          <div className={s.comment__info_title}>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{timeAgo(item.snippet.topLevelComment.snippet.updatedAt)}</span></div>
          <div className={s.comment__info_subtitle}>
            {item.snippet.topLevelComment.snippet.textOriginal}
          </div>  
          <div className={s.comment__likes}> 
          <AiOutlineLike/> {item.snippet.topLevelComment.snippet.likeCount}
          </div>
        </div>
      </div>)}
    </section>
  )
}

export default Comments