import NewsItem from '@/entites/news/ui/NewsItem/NewsItem';
import { withSkeleton } from '@/shared/hocs/withSkeleton';
import styles from './styles.module.css';
import { INews } from '@/entites/news';

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