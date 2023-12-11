import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css'
import { INews } from '../../interfaces/interfaxes';

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
