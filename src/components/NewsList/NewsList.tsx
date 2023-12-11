import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces/interfaxes';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface Props {
    news?: INews[] | null
}

function NewsList({ news }: Props) {
    return (
        <ul className={styles.list}>
            {news?.map(item => {
               return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10, 'column');

export default NewsListWithSkeleton;