import LatestNews from './LatestNews/LatestNews'
import styles from './styles.module.css'
import NewsByFilters from './NewsByFilters/NewsByFilters'

export default function MainPage() {
  return (
    <main className={styles.main}>
      <LatestNews/>
      <NewsByFilters/>
    </main>
  )
}
