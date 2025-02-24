import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ArticleCard from './ArticleCard'

function ArticleList() {
  const articles=useSelector((state)=>state.article.ArticleList)

  return (
  <div>
    <div className='blog-container'>
       {articles.map((el)=><ArticleCard article={el}/>)}
    </div>
  </div>
  )
}

export default ArticleList