import { withSkeleton } from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../NewsBanner/NewsBanner'
import styles from './styles.module.css'

function BannersList({banners}) {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner=>{
                return <NewsBanner key={banner.id} item={banner}/>
            })}
        </ul>
    )
}

const BannerListWithSkeleton = withSkeleton(BannersList, 'banner', 9, 'row')

export default BannerListWithSkeleton;
