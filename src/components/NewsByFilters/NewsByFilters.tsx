import { PAGE_SIZE, TOTAL_PAGE } from '../../constants/constants'
import NewsList from '../NewsList/NewsList'
import styles from './styles.module.css'
import NewsFilter from '../NewsFilter/NewsFilter'
import { useFilters } from '../../helpers/hooks/useFilters';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch'
import { getNews } from '../../api/apiNews'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { NewsApiResponse, ParamsType } from '../../interfaces/interfaxes';

export default function NewsByFilters() {

  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

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

  const handlePageClick = (index:number) => {
    changeFilter('page_number', index)
  }

  return (
    <section className={styles.section}>
      <NewsFilter filters={filters} changeFilter={changeFilter} />

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