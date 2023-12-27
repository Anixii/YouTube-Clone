import s from './Categories.module.css'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { categories } from '../../utils/constants'
import { getVideoByCatrgories, setCategory } from '../../redux/slice'
const Categories = () => { 
    const {currentCategory} = useAppSelector((state) => state.slice) 
    console.log(currentCategory);
    
    const dispatch = useAppDispatch()
    const onHandleChangeCategory = (item: {name: string, value:string}) =>{ 
        dispatch(setCategory(item.value)) 
        dispatch(getVideoByCatrgories({q: item.value}))
    }
  return (
    <> 
        <section className={s.categories}>
            <div className={s.categories__container}>
                {categories.map((item,index) => (
                    <div key={index} onClick={() => onHandleChangeCategory(item)} className={`${s.categories__card } ${currentCategory === item.value && s.selected}`} > 
                        {item.name}
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Categories
// white-space: nowrap;
// overflow: hidden;