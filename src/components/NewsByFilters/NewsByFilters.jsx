import { TOTAL_PAGE } from '../../constants/constants'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'
import NewsFilter from '../NewsFilter/NewsFilter'

export default function NewsByFilters({filters, changeFilter, isLoading, news}) {

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGE) {
          changeFilter('page_number', filters.page_number + 1)
        }
      }
    
      const handlePreviousPage = () => {
        if (filters.page_number > 1) {
          changeFilter('page_number', filters.page_number - 1)
        }
      }
    
      const handlePageClick = (index) => {
        changeFilter('page_number', index)
      }

  return (
    <section className={styles.section}>
        <NewsFilter filters={filters} changeFilter={changeFilter}/>

      <Pagination
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage} 
        handlePageClick={handlePageClick} 
        totalPage={TOTAL_PAGE} 
        currentPage={filters.page_number} 
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage} 
        handlePageClick={handlePageClick} 
        totalPage={TOTAL_PAGE} 
        currentPage={filters.page_number} 
      />
    </section>
  )
}
