import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopLayot from "./components/Layouts/TopLayot";
import { useAppSelector } from "./redux/store";
import MainPage from "./pages/MainPage";
import SearchingPage from "./pages/SearchingPage";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails";
import Footer from "./components/Footer/Footer";
import SearchResult from "./components/FeedBack/SearchResult";

function App() {
  const { theme } = useAppSelector((state) => state.slice);

  return (
    <>
      <div className="body" data-theme={theme}>
        <div className="main">
          <TopLayot />
          <div className="main__wapper">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/search/:params" element={<SearchingPage />} />
              <Route path="/video/:params" element={<VideoDetails />} />
              <Route path="/channel/:params" element={<ChannelDetails />} /> 
              <Route path="*" element={<SearchResult title="Эта страница недоступна."  img={'https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png'}/>} /> 
            </Routes>
          </div> 
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
