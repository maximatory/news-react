import { withSkeleton } from '../../../../shared/hocs/withSkeleton'
import NewsBanner from '../../../../entites/news/ui/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { INews } from '@/entites/news'

interface Props {
    banners?: INews[] | null
}

function BannersList({banners}:Props) {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner=>{
                return <NewsBanner key={banner.id} item={banner}/>
            })}
        </ul>
    )
}

const BannerListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 9, 'row')

export default BannerListWithSkeleton;
