import { useAppDispatch, useAppSelector } from "@/app/appStore"
import NewsFilter from "@/pages/main/ui/NewsFilter/NewsFilters"
import NewsList from "@/widgets/news/ui/NewsList/NewsList"
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination"
import { TOTAL_PAGE } from "@/shared/constants/constants"
import { useDebounce } from "@/shared/hooks/useDebounce"
import { useGetNewsQuery } from "@/entites/news/api/newsApi"
import { setFilters } from "@/entites/news/model/newsSlice"
import styles from './styles.module.css'

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