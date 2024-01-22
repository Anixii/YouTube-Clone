import {
  DrawerCloseButton,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import s from "./SIdebar.module.css"; 
import { FaGamepad,FaRegNewspaper,FaChalkboardTeacher } from "react-icons/fa"; 
import { MdMusicNote,MdHomeFilled  } from "react-icons/md"; 
import { TfiCup } from "react-icons/tfi"; 
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getVideoByCatrgories, setCategory } from "../../redux/slice";
type SidebarType = {
  onClose: any;
  open: any;
};
const Sidebar = ({ onClose, open }: SidebarType) => {
  const { theme} = useAppSelector((state) => state.slice); 
    
  const dispatch = useAppDispatch()
  const onHandleChangeCategory = (item:string) =>{ 
      dispatch(setCategory(item)) 
      dispatch(getVideoByCatrgories({q: item}))
  }
  return (
    <Drawer closeOnEsc placement="left" onClose={onClose} isOpen={open}>
      <DrawerOverlay />
      <DrawerContent
        style={{ backgroundColor: theme === "dark" ? "#0f0f0f" : "#fff" }}
        className="sidebar"
      >
        <DrawerCloseButton style={{ color: theme === "dark" ? "#fff" : "#000" }} />
        <DrawerHeader>
          <div className={s.sidebar__title} style={{ color: theme === "dark" ? "#fff" : "#000" }}>Навигация</div>
        </DrawerHeader>
        <DrawerBody>
          <div className={s.sidebar__list} style={{ color: theme === "dark" ? "#fff" : "#000" }}>  
          <Link to='/' className={s.sidebar__item}><MdHomeFilled/>  Главная</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Музыка')} className={s.sidebar__item}><MdMusicNote/>  Музыка</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Видеоигры')} className={s.sidebar__item}><FaGamepad/>  Видеоигры</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Новости')} className={s.sidebar__item}><FaRegNewspaper />  Новости</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Спорт')} className={s.sidebar__item}><TfiCup/>  Спорт</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Мода')} className={s.sidebar__item}><GiClothes/>  Мода</Link>
            <Link to='/' onClick={() => onHandleChangeCategory('Обучение')} className={s.sidebar__item}><FaChalkboardTeacher/>  Обучение</Link>
          </div>
        </DrawerBody> 
        <DrawerFooter style={{ color: theme === "dark" ? "#fff" : "#000" }}> 
          Made by Anixii
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
