import { PAGE_SIZE } from '../../constants/constants'
import { getNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFilters } from '../../helpers/hooks/useFilters'
import styles from './Main.module.css'
import LatestNews from '../../components/LatestNews/LatestNews'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'

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

  return (
    <main className={styles.main}>

      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters 
        filters={filters} 
        changeFilter={changeFilter}
        news={data?.news}
        isLoading={isLoading}
      />
    
    </main>
  )
}
