import React  from 'react'
import s from './Forms.module.css' 
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setSearchParams } from '../../redux/search-Slice'
import SearchModal from './SearchModal'
import { useDisclosure } from '@chakra-ui/react'
type SearchInputType = { 
    theme: string, 
}
const SearchInput:React.FC<SearchInputType> = ({theme}) => { 
  const dispatch = useAppDispatch() 
  const value = useAppSelector((state) => state.search.searchParams)   
  const isDisabled = value === ''
  const nav = useNavigate()  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onHandleSubmit = (e:any) =>{ 
    e.preventDefault()  
    nav('/search/' + value)
    onClose()
  } 

  return (
    <>  
    <form onSubmit={onHandleSubmit} className={s.input__search}>
        <input autoComplete='off' name='search' type="text" value={value} onChange={(e) => dispatch(setSearchParams(e.target.value))} placeholder='Поиск...' /> 
        <button disabled={isDisabled} className={s.search__btn}> 
        <svg xmlns="http://www.w3.org/2000/svg" fill={theme === 'light' ? '#000' : '#FFF' } enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
        </button>
    </form> 
        <button  onClick={onOpen} className={s.search__btn_phone}> 
        <svg xmlns="http://www.w3.org/2000/svg" fill={theme === 'light' ? '#000' : '#FFF' } enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
        </button>
    <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default SearchInput