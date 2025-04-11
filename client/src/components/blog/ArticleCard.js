import React from 'react'
import { useDispatch } from 'react-redux'
import ArticleModal from './ArticleModal'


function ArticleCard({article}) {
  console.log(article)
  const dispatch=useDispatch()
  return (
    <div className='carteArticle'>
        <img src={article.imageUrl} style={{minWidth:"250px", maxWidth:"250px", minHeight:"250px", maxHeight:"250px"}}/>
        <section className='text-sec'>
          <h5>{article.title}</h5>
    
          <section>

  <details>
    <summary>Details</summary>
    <p>
    {article.content}</p>
  </details>

</section>
            {/* <ArticleModal/>
        */}
        </section>
        {/* <button onClick={()=>dispatch(editArticle({name:article.name}))}>Read more →</button> */} 
    </div>
  )
}

export default ArticleCard