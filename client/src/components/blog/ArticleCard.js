import React from 'react'
import { useDispatch } from 'react-redux'


function ArticleCard({article}) {
  console.log(article)
  const dispatch=useDispatch()
  return (
    <div className='carteArticle'>
        <img src={article.imageUrl} style={{minWidth:"250px", maxWidth:"250px", minHeight:"250px", maxHeight:"250px"}}/>
        <h5>{article.title}</h5>
        {/* <p>{article.content}</p> */}
        {/* <button onClick={()=>dispatch(deleteArticle({name:article.name}))}>Read more →</button> */}
    </div>
  )
}

export default ArticleCard