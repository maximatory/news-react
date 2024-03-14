
import BannersList from '@/widgets/news/ui/BannersList/BannersList';
import { useGetLatestNewsQuery } from '@/entites/news/api/newsApi';
import styles from './styles.module.css';


export default function LatestNews() {
  const {data, isLoading} = useGetLatestNewsQuery(null)
  
  return (
    <section className={styles.section}>
        <BannersList isLoading={isLoading} banners={data && data.news}/>
    </section>
  )
}
