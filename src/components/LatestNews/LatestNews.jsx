import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';

export default function LatestNews({isLoading, banners}) {
  return (
    <section className={styles.section}>
        <BannersList isLoading={isLoading} banners={banners}/>
    </section>
  )
}
