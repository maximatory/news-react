import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../..';
import styles from './styles.module.css';

interface Props {
    item: INews;
}

export default function NewsItem({item}: Props) {
    return (
        <li className={styles.item}>
            <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
            <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}
