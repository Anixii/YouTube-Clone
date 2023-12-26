import React from 'react'
import s from './Forms.module.css' 
type SearchInputType = { 
    theme: string
}
const SearchInput:React.FC<SearchInputType> = ({theme}) => {
  return (
    <> 
    <div className={s.input__search}>
        <input type="text" placeholder='Search...' /> 
        <button className={s.search__btn}> 
        <svg xmlns="http://www.w3.org/2000/svg" fill={theme === 'light' ? '#000' : '#FFF' } enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
        </button>
    </div>
    </>
  )
}

export default SearchInput