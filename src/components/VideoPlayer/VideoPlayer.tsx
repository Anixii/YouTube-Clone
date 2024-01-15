import ReactPlayer from "react-player";
import s from "./VideoPlayer.module.css";
import { useAppSelector } from "../../redux/store";
import VideoCard from "../SearchedVideoList/VideoCard";
import { AiOutlineLike } from "react-icons/ai";
import { formatNumber, timeAgo } from "../../utils/customFuctions";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
const VideoPlayer = () => {
  const { videoList, dataItems } = useAppSelector((state) => state.video);
  const { theme } = useAppSelector((state) => state.slice);
  console.log(dataItems);
  const nav = useNavigate();
  const onHandleClickVideo = (link: any) => {
    nav(`/video/` + link);
  };
  console.log(dataItems);

  const videoData = dataItems?.items[0];
  return (
    <div className={s.video}>
      <div className={s.video__container}>
        <div className={s.video__player}>
          <div className={s.video__info}>
            <ReactPlayer
              className={"react_player"}
              controls
              pip={true}
              playing
              url={`https://www.youtube.com/watch?v=${dataItems?.items[0].id}`}
            />
            <div className={s.video__text}>
              <div className={s.video__title}>{videoData?.snippet.title}</div>
              <div className={s.video__sub_menu}>
                <div className={s.video__sub_menu_title}>
                  {videoData?.snippet.channelTitle}
                </div>
                <div className={s.video__sub_menu_likes}>
                  <AiOutlineLike />
                  {videoData?.statistics.likeCount}
                </div>
              </div>
            </div>

            <div className={s.info}>
              <div className={s.info__title}>
                {formatNumber(videoData?.statistics.viewCount)} просмотров{" "}
                {timeAgo(videoData?.snippet.publishedAt)}
              </div>
              <div className={s.info__desc}>
                {videoData?.snippet.description}
              </div>
              <div className={s.info__hash}>
                {videoData?.snippet?.tags?.map((item, index) => (
                  <div key={index} className={s.info__hash_span}>
                    #{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          <div className={s.comments}>
            <div className={s.comments__title}>
              {videoData?.statistics.commentCount} комментариев
            </div>
            <Comments />
          </div>
        <div className={s.video__list}>
          {videoList?.items?.map((item, index) => (
            <div
              key={index}
              className={s.video__list_item}
              onClick={() =>
                onHandleClickVideo(item.id.channelId || item.id.videoId)
              }
            >
              <VideoCard
                link={item.id.channelId || item.id.videoId}
                theme={theme}
                key={index}
                item={item.snippet}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
