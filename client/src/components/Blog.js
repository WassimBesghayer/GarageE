import React from 'react'
import { useSelector } from 'react-redux'
import ArticleCard from '../components/blog/ArticleCard'
import './styling/blog.css'


function Blog() {
   const articles=useSelector((state)=>state.article.ArticleList)
  
   return (
   <div className='mymodal'>
     <div className='blog-container'>
        {articles.map((el)=><ArticleCard article={el}/>)}
     </div>
   </div>
   )
}

export default Blog