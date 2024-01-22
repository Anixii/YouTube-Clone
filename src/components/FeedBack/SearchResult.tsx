const SearchResult = ({img,title}:{img:any, title:string}) => {
  return (
    <div className='feedback'>
        <img src={img} alt="Ничего не найдено" /> 
        <div className='title'>{title}</div>
    </div>
  )
}

export default SearchResult