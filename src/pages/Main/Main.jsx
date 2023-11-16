import { TOTAL_PAGE, PAGE_SIZE } from '../../constants/constants'
import { getNews, getCategories } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFilters } from '../../helpers/hooks/useFilters'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import styles from './Main.module.css'

export default function Main() {

  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);


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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search 
        keywords={filters.keywords} 
        setKeywords={(keywords) => changeFilter('keywords', keywords)} 
      />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage} 
        handlePageClick={handlePageClick} 
        totalPage={TOTAL_PAGE} 
        currentPage={filters.page_number} 
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage} 
        handlePageClick={handlePageClick} 
        totalPage={TOTAL_PAGE} 
        currentPage={filters.page_number} 
      />
    </main>
  )
}
