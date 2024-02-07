import { TOTAL_PAGE } from '../../constants/constants'
import NewsList from '../NewsList/NewsList'
import styles from './styles.module.css'
import NewsFilter from '../NewsFilter/NewsFilter'
import { useDebounce } from '../../helpers/hooks/useDebounce';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';
export default function NewsByFilters() {


  const dispatch = useAppDispatch()
  const filters = useAppSelector(state=> state.news.filters)

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const {data, isLoading} = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      // changeFilter('page_number', filters.page_number + 1)
      dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
    }
  }

  const handlePageClick = (pageNumber:number) => {
    dispatch(setFilters({key: 'page_number', value: pageNumber}))
  }

  return (
    <section className={styles.section}>
      <NewsFilter 
        filters={filters} 
      />

      <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data && data?.news} />
      </PaginationWrapper>
    </section>
  )
}