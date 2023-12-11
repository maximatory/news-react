import { withSkeleton } from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces/interfaxes'
import NewsBanner from '../NewsBanner/NewsBanner'
import styles from './styles.module.css'

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
