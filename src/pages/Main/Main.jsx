import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './Main.module.css'
import {getNews} from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'

export default function Main() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = 10
  const pageSize = 10
  
  const fetchNews = async (currentPage)=>{
    try {
      setIsLoading(true)
      const response = await getNews(currentPage, pageSize)
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNextPage = ()=>{
    if(currentPage < totalPage){
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (index)=>{
    setCurrentPage(index)
  }

  useEffect(()=>{
    fetchNews(currentPage, pageSize)
  }, [currentPage])

  return (
    <main className={styles.main}>
        {news.length && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type='banner'/>}
        <Pagination currentPage={currentPage} totalPage={totalPage} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
        { !isLoading ? <NewsList news={news}/> : <Skeleton count={10} type='item'/>}
        <Pagination currentPage={currentPage} totalPage={totalPage} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
    </main>
  )
}
 