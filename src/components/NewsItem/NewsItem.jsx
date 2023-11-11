import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css'

export default function NewsItem({item}) {
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
